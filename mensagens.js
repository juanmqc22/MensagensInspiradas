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
  {
    tipo: "escritura",
    texto: "Morôni era um homem forte e poderoso; era um homem de perfeito entendimento.",
    fonte: "Alma 48:11",
    link: ref("bofm", "alma", 48, 11),
  },
  {
    tipo: "escritura",
    texto: "Ora, eles nunca haviam lutado; não obstante, não temiam a morte; [...] e haviam sido ensinados por suas mães que, se não duvidassem, Deus os livraria.",
    fonte: "Alma 56:47",
    link: ref("bofm", "alma", 56, 47),
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
  {
    tipo: "escritura",
    texto: "Portanto deveis prosseguir com firmeza em Cristo, tendo um perfeito esplendor de esperança e amor a Deus e a todos os homens.",
    fonte: "2 Néfi 31:20",
    link: ref("bofm", "2-ne", 31, 20),
  },
  {
    tipo: "escritura",
    texto: "Banqueteai-vos com as palavras de Cristo; pois eis que as palavras de Cristo vos dirão todas as coisas que deveis fazer.",
    fonte: "2 Néfi 32:3",
    link: ref("bofm", "2-ne", 32, 3),
  },
  {
    tipo: "escritura",
    texto: "E falamos de Cristo, regozijamo-nos em Cristo, pregamos a Cristo, profetizamos de Cristo.",
    fonte: "2 Néfi 25:26",
    link: ref("bofm", "2-ne", 25, 26),
  },
  {
    tipo: "escritura",
    texto: "Chorar com os que choram; sim, e consolar os que necessitam de consolo e servir de testemunhas de Deus em todos os momentos e em todas as coisas e em todos os lugares.",
    fonte: "Mosias 18:9",
    link: ref("bofm", "mosiah", 18, 9),
  },
  {
    tipo: "escritura",
    texto: "Por meio de coisas pequenas e simples as grandes são realizadas.",
    fonte: "Alma 37:6",
    link: ref("bofm", "alma", 37, 6),
  },
  {
    tipo: "escritura",
    texto: "Aconselha-te com o Senhor em todos os teus atos e ele dirigir-te-á para o bem.",
    fonte: "Alma 37:37",
    link: ref("bofm", "alma", 37, 37),
  },
  {
    tipo: "escritura",
    texto: "Todos os que confiarem em Deus serão amparados em suas provações e dificuldades e aflições e serão elevados no último dia.",
    fonte: "Alma 36:3",
    link: ref("bofm", "alma", 36, 3),
  },
  {
    tipo: "escritura",
    texto: "Se tendes fé, tendes esperança nas coisas que não se veem e que são verdadeiras.",
    fonte: "Alma 32:21",
    link: ref("bofm", "alma", 32, 21),
  },
  {
    tipo: "escritura",
    texto: "Deixai que vossa luz brilhe diante deste povo, para que vejam vossas boas obras e glorifiquem vosso Pai que está no céu.",
    fonte: "3 Néfi 12:16",
    link: ref("bofm", "3-ne", 12, 16),
  },
  {
    tipo: "escritura",
    texto: "Não recebeis testemunho senão depois da prova de vossa fé.",
    fonte: "Éter 12:6",
    link: ref("bofm", "ether", 12, 6),
  },
  {
    tipo: "escritura",
    texto: "Mas a caridade é o puro amor de Cristo e permanece para sempre.",
    fonte: "Morôni 7:47",
    link: ref("bofm", "moro", 7, 47),
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
  {
    tipo: "escritura",
    texto: "Não to mandei eu? Esforça-te e tem bom ânimo; não temas, nem te espantes, porque o Senhor teu Deus é contigo, por onde quer que andares.",
    fonte: "Josué 1:9",
    link: ref("ot", "josh", 1, 9),
  },
  {
    tipo: "escritura",
    texto: "O Senhor é o meu pastor; nada me faltará.",
    fonte: "Salmos 23:1",
    link: ref("ot", "ps", 23, 1),
  },
  {
    tipo: "escritura",
    texto: "Aquietai-vos e sabei que eu sou Deus.",
    fonte: "Salmos 46:10",
    link: ref("ot", "ps", 46, 10),
  },
  {
    tipo: "escritura",
    texto: "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias; correrão e não se cansarão; caminharão e não se fatigarão.",
    fonte: "Isaías 40:31",
    link: ref("ot", "isa", 40, 31),
  },
  {
    tipo: "escritura",
    texto: "Mas buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.",
    fonte: "Mateus 6:33",
    link: ref("nt", "matt", 6, 33),
  },
  {
    tipo: "escritura",
    texto: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
    fonte: "João 3:16",
    link: ref("nt", "john", 3, 16),
  },
  {
    tipo: "escritura",
    texto: "Um novo mandamento vos dou: Que vos ameis uns aos outros; como eu vos amei a vós, que também vós uns aos outros vos ameis.",
    fonte: "João 13:34",
    link: ref("nt", "john", 13, 34),
  },
  {
    tipo: "escritura",
    texto: "E, se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente e não o lança em rosto, e ser-lhe-á dada.",
    fonte: "Tiago 1:5",
    link: ref("nt", "james", 1, 5),
  },

  // — Doutrina e Convênios e Pérola de Grande Valor —
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
  {
    tipo: "escritura",
    texto: "Aprende de mim e ouve minhas palavras; anda na mansidão de meu Espírito e terás paz em mim.",
    fonte: "Doutrina e Convênios 19:23",
    link: ref("dc-testament", "dc", 19, 23),
  },
  {
    tipo: "escritura",
    texto: "Lembrai-vos de que o valor das almas é grande à vista de Deus.",
    fonte: "Doutrina e Convênios 18:10",
    link: ref("dc-testament", "dc", 18, 10),
  },
  {
    tipo: "escritura",
    texto: "Portanto não vos canseis de fazer o bem, porque estais lançando o alicerce de uma grande obra. E de pequenas coisas provém aquilo que é grande.",
    fonte: "Doutrina e Convênios 64:33",
    link: ref("dc-testament", "dc", 64, 33),
  },
  {
    tipo: "escritura",
    texto: "Irei adiante de vós. Estarei a vossa direita e a vossa esquerda, e meu Espírito estará em vossos corações e meus anjos ao vosso redor, para vos suster.",
    fonte: "Doutrina e Convênios 84:88",
    link: ref("dc-testament", "dc", 84, 88),
  },
  {
    tipo: "escritura",
    texto: "Achegai-vos a mim e eu me achegarei a vós; buscai-me diligentemente e achar-me-eis.",
    fonte: "Doutrina e Convênios 88:63",
    link: ref("dc-testament", "dc", 88, 63),
  },
  {
    tipo: "escritura",
    texto: "Pois eis que esta é minha obra e minha glória: Levar a efeito a imortalidade e a vida eterna do homem.",
    fonte: "Moisés 1:39",
    link: ref("pgp", "moses", 1, 39),
  },
  {
    tipo: "escritura",
    texto: "Este é o Meu Filho Amado. Ouve-O!",
    fonte: "Joseph Smith—História 1:17",
    link: ref("pgp", "js-h", 1, 17),
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
  {
    tipo: "profeta",
    texto: "Nos dias futuros, não será possível sobreviver espiritualmente sem a influência orientadora, diretriz, consoladora e constante do Espírito Santo.",
    fonte: "Presidente Russell M. Nelson",
    detalhe: "“Revelação para a Igreja, revelação para nossa vida”, abril de 2018",
  },
  {
    tipo: "profeta",
    texto: "Nunca deixem que um problema a ser resolvido se torne mais importante do que uma pessoa a ser amada.",
    fonte: "Presidente Thomas S. Monson",
    detalhe: "“Encontrar alegria na jornada”, outubro de 2008",
  },
  {
    tipo: "profeta",
    texto: "Algumas bênçãos vêm logo, outras demoram um pouco, e algumas só vêm no céu; mas, para aqueles que aceitam o evangelho de Jesus Cristo, elas vêm.",
    fonte: "Élder Jeffrey R. Holland",
    detalhe: "“Um sumo sacerdote dos bens futuros”, outubro de 1999",
  },
  {
    tipo: "profeta",
    texto: "Eu lhes ensino princípios corretos, e eles governam a si mesmos.",
    fonte: "Profeta Joseph Smith",
    detalhe: "Citado por John Taylor",
  },
];
