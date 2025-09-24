const dados = {
  numeracoes: {
    "Saia e calça": "36 / PP",
    "Blusa": "P",
    "Pé": "35-36",
    "Anel direito": "16",
    "Anel esquerdo": "15"
  },
  gostos: {
    gosta: [
      "Chocolate (Oreo Branco é o favorito)",
      "Açaí",
      "Cenoura (crua)",
      "Batata (de qualquer jeito)",
      "Kiwi",
      "Ameixa",
      "Purê de abóbora e batata",
      "Pizza de rapadura"
    ],
    nao_gosta: [
      "Pitaya",
      "Beterraba",
      "Leguminosas verdes",
      "Chocolate amargo",
      "Coisas sem muito gosto"
    ]
  },
  coresFavoritas: ["Rosa", "Roxo"],
  estilo: [
    "Beem coreanah",
    "Roupas modestas e elegantes (vestidos ou blusa + saia)"
  ]
};

function criarCard(titulo, conteudo, cor) {
  const card = document.createElement("div");
  card.classList.add("card", cor);

  const h2 = document.createElement("h2");
  h2.textContent = titulo;
  card.appendChild(h2);

  if (Array.isArray(conteudo)) {
    const ul = document.createElement("ul");
    conteudo.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    card.appendChild(ul);
  } else if (typeof conteudo === "object") {
    const ul = document.createElement("ul");
    for (const chave in conteudo) {
      const li = document.createElement("li");
      li.textContent = `${chave}: ${conteudo[chave]}`;
      ul.appendChild(li);
    }
    card.appendChild(ul);
  } else {
    const p = document.createElement("p");
    p.textContent = conteudo;
    card.appendChild(p);
  }

  document.getElementById("board").appendChild(card);
}

// Gerar cards
criarCard("Numerações", dados.numeracoes, "yellow");
criarCard("Gosta de", dados.gostos.gosta, "pink");
cr
