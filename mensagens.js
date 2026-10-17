// Mensagens exibidas no site.
// tipo: "escritura" ou "profeta"
// link (opcional): fonte oficial para ler no contexto.
// Confira sempre o texto em churchofjesuschrist.org antes de adicionar novas mensagens.

const ESCRITURAS = "https://www.churchofjesuschrist.org/study/scriptures";

function ref(volume, livro, capitulo, versiculo) {
  return `${ESCRITURAS}/${volume}/${livro}/${capitulo}?lang=por&id=p${versiculo}#p${versiculo}`;
}

const MENSAGENS = [
  // — Capitão Morôni —
  {
    tipo: "escritura",
    texto: "Em memória de nosso Deus, nossa religião e liberdade, e nossa paz, nossas esposas e nossos filhos.",
    fonte: "Alma 46:12",
    link: ref("bofm", "alma", 46, 12),
  },
  {
    tipo: "escritura",
    texto: "Sim, em verdade, em verdade vos digo que se todos os homens tivessem sido, fossem e viessem a ser semelhantes a Morôni, eis que os próprios poderes do inferno teriam sido abalados para sempre; sim, o diabo nunca teria poder sobre o coração dos filhos dos homens.",
    fonte: "Alma 48:17",
    link: ref("bofm", "alma", 48, 17),
  },

  // — Livro de Mórmon —
  {
    tipo: "escritura",
    texto: "Irei e cumprirei as ordens do Senhor, porque sei que o Senhor nunca dá ordens aos filhos dos homens sem antes preparar um caminho pelo qual suas ordens possam ser cumpridas.",
    fonte: "1 Néfi 3:7",
    link: ref("bofm", "1-ne", 3, 7),
  },
  {
    tipo: "escritura",
    texto: "Adão caiu para que os homens existissem; e os homens existem para que tenham alegria.",
    fonte: "2 Néfi 2:25",
    link: ref("bofm", "2-ne", 2, 25),
  },
  {
    tipo: "escritura",
    texto: "Quando estais a serviço de vosso próximo, estais somente a serviço de vosso Deus.",
    fonte: "Mosias 2:17",
    link: ref("bofm", "mosiah", 2, 17),
  },
  {
    tipo: "escritura",
    texto: "E agora, meus filhos, lembrai-vos, lembrai-vos de que é sobre a rocha de nosso Redentor, que é Cristo, o Filho de Deus, que deveis construir os vossos alicerces.",
    fonte: "Helamã 5:12",
    link: ref("bofm", "hel", 5, 12),
  },
  {
    tipo: "escritura",
    texto: "E se os homens vierem a mim, mostrar-lhes-ei sua fraqueza. Dou aos homens fraqueza para que sejam humildes; e minha graça basta a todos os que se humilham perante mim.",
    fonte: "Éter 12:27",
    link: ref("bofm", "ether", 12, 27),
  },
  {
    tipo: "escritura",
    texto: "E pelo poder do Espírito Santo podeis saber a verdade de todas as coisas.",
    fonte: "Morôni 10:5",
    link: ref("bofm", "moro", 10, 5),
  },
  {
    tipo: "escritura",
    texto: "Sim, vinde a Cristo e sede aperfeiçoados nele.",
    fonte: "Morôni 10:32",
    link: ref("bofm", "moro", 10, 32),
  },

  // — Bíblia —
  {
    tipo: "escritura",
    texto: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.",
    fonte: "Provérbios 3:5–6",
    link: ref("ot", "prov", 3, 5),
  },
  {
    tipo: "escritura",
    texto: "Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.",
    fonte: "Isaías 41:10",
    link: ref("ot", "isa", 41, 10),
  },
  {
    tipo: "escritura",
    texto: "Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize.",
    fonte: "João 14:27",
    link: ref("nt", "john", 14, 27),
  },
  {
    tipo: "escritura",
    texto: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",
    fonte: "Mateus 11:28",
    link: ref("nt", "matt", 11, 28),
  },
  {
    tipo: "escritura",
    texto: "Posso todas as coisas em Cristo que me fortalece.",
    fonte: "Filipenses 4:13",
    link: ref("nt", "philip", 4, 13),
  },

  // — Doutrina e Convênios —
  {
    tipo: "escritura",
    texto: "Meu filho, paz seja com tua alma; tua adversidade e tuas aflições não durarão mais que um momento.",
    fonte: "Doutrina e Convênios 121:7",
    link: ref("dc-testament", "dc", 121, 7),
  },
  {
    tipo: "escritura",
    texto: "Portanto não temais, pequeno rebanho; fazei o bem.",
    fonte: "Doutrina e Convênios 6:34",
    link: ref("dc-testament", "dc", 6, 34),
  },
  {
    tipo: "escritura",
    texto: "Olhai para mim em cada pensamento; não duvideis, não temais.",
    fonte: "Doutrina e Convênios 6:36",
    link: ref("dc-testament", "dc", 6, 36),
  },

  // — Profetas e apóstolos —
  {
    tipo: "profeta",
    texto: "A alegria que sentimos tem pouco a ver com as circunstâncias de nossa vida e tudo a ver com o foco de nossa vida.",
    fonte: "Presidente Russell M. Nelson",
    detalhe: "“Alegria e sobrevivência espiritual”, outubro de 2016",
  },
  {
    tipo: "profeta",
    texto: "O futuro é tão brilhante quanto a sua fé.",
    fonte: "Presidente Thomas S. Monson",
    detalhe: "“Sede de bom ânimo”, abril de 2009",
  },
  {
    tipo: "profeta",
    texto: "Duvide de suas dúvidas antes de duvidar de sua fé.",
    fonte: "Élder Dieter F. Uchtdorf",
    detalhe: "“Venha, junte-se a nós”, outubro de 2013",
  },
];
