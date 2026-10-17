const el = {
  mensagem: document.getElementById("mensagem"),
  categoria: document.getElementById("categoria"),
  texto: document.getElementById("texto"),
  fonte: document.getElementById("fonte"),
  detalhe: document.getElementById("detalhe"),
  outra: document.getElementById("outra"),
  contexto: document.getElementById("contexto"),
  compartilhar: document.getElementById("compartilhar"),
};

let atual = null;

// Lembra as últimas mensagens vistas para não repetir logo na próxima leitura da tag.
function lerVistas() {
  try {
    return JSON.parse(localStorage.getItem("vistas")) || [];
  } catch {
    return [];
  }
}

function salvarVistas(vistas) {
  try {
    localStorage.setItem("vistas", JSON.stringify(vistas));
  } catch {}
}

function escolher() {
  const vistas = lerVistas();
  const limite = Math.floor(MENSAGENS.length / 2);
  let opcoes = MENSAGENS.map((_, i) => i).filter((i) => !vistas.includes(i));
  if (opcoes.length === 0) opcoes = MENSAGENS.map((_, i) => i);

  const indice = opcoes[Math.floor(Math.random() * opcoes.length)];
  salvarVistas([indice, ...vistas].slice(0, limite));
  return MENSAGENS[indice];
}

function mostrar(m) {
  atual = m;
  el.categoria.textContent = m.tipo === "profeta" ? "Palavras dos profetas" : "Escrituras";
  el.texto.textContent = `“${m.texto}”`;
  el.fonte.textContent = m.fonte;
  el.detalhe.textContent = m.detalhe || "";

  el.contexto.hidden = !m.link;
  if (m.link) el.contexto.href = m.link;
}

function trocar() {
  el.mensagem.classList.add("saindo");
  setTimeout(() => {
    mostrar(escolher());
    el.mensagem.classList.remove("saindo");
  }, 450);
}

async function compartilhar() {
  const texto = `“${atual.texto}” — ${atual.fonte}`;
  try {
    await navigator.share({ text: texto, url: location.href });
  } catch {}
}

mostrar(escolher());

el.outra.addEventListener("click", trocar);

if (navigator.share) {
  el.compartilhar.hidden = false;
  el.compartilhar.addEventListener("click", compartilhar);
}
