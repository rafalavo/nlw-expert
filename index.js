const perguntas = [
    {
      pergunta: "Qual é o tipo inicial de Pokémon que o protagonista pode escolher em Pokémon Red e Blue?",
      respostas: [
        "Charmander",
        "Bulbasaur",
        "Squirtle",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes Pokémon é conhecido como o 'mascote' da franquia Pokémon?",
      respostas: [
        "Pikachu",
        "Jigglypuff",
        "Meowth",
      ],
      correta: 0
    },
    {
      pergunta: "Quantos tipos de Pokémon existem atualmente?",
      respostas: [
        "15",
        "18",
        "20",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o Pokémon lendário que representa o tipo fogo?",
      respostas: [
        "Moltres",
        "Zapdos",
        "Articuno",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o Pokémon número #001 na Pokédex Nacional?",
      respostas: [
        "Bulbasaur",
        "Pikachu",
        "Charizard",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o tipo primário de Pikachu?",
      respostas: [
        "Elétrico",
        "Normal",
        "Fada",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o professor que dá o primeiro Pokémon aos treinadores na região de Johto?",
      respostas: [
        "Professor Oak",
        "Professor Birch",
        "Professor Elm",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome da equipe vilã em Pokémon Ruby e Sapphire?",
      respostas: [
        "Team Rocket",
        "Team Magma",
        "Team Aqua",
      ],
      correta: 1
    },
    {
      pergunta: "Qual destes Pokémon é conhecido por evoluir para Eevee?",
      respostas: [
        "Vaporeon",
        "Jolteon",
        "Eevee",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o Pokémon inicial de tipo água em Pokémon Sun e Moon?",
      respostas: [
        "Popplio",
        "Litten",
        "Rowlet",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }