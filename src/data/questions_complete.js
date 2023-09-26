const data = [
  {
  //       /* QUESTOES FACIL */

  //   category: "Fácil",
  //   questions: [
  //     {
  //       question: "Em um projeto para a construção de um cinema, os arquitetos estão avaliando a relação entre a quantidade de fileiras e a quantidade de cadeiras em cada fileira. O projeto inicial prevê uma sala para 304 pessoas. No caso de utilizarem 19 fileiras, o número de cadeiras por fileira será:",
  //       options: ["14", "15", "16", "13"],
  //       answer: "16",
  //     },

  //     {
  //       question: "Durante um naufrágio, os sobreviventes dividiram a comida que lhes sobrou em partes iguais. Sabendo que a quantidade de comida duraria 9 dias para os 12 náufragos, caso fossem encontrados mais 4 sobreviventes e a comida fosse redistribuída, a quantidade de dias aproximadamente que ela duraria seria de:",
  //       options: ["2 dias", "4 dias", "5 dias", "6 dias"],
  //       answer: "6 dias",
  //     },

  //     {
  //       question: "Em uma confecção estão sendo produzidas blusas de duas cores com a mesma quantidade de tecido para cada cor. No estoque, há um rolo de tecido branco com 4,2 m e um rolo de tecido azul com 13 m. Os tecidos devem ser cortados em tiras com o mesmo e, maior comprimento possível, sem sobrar nenhum pedaço nos rolos. Em centímetros, cada tira de tecido terá: ",
  //       options: ["150 cm", "115 cm", "20 cm", "60 cm"],
  //       answer: "20 cm",
  //     },

  //     {
  //       question: "Se lançarmos um dado, qual a probabilidade de obtermos um número maior que 4?",
  //       options: ["2/3", "1/4", "1/3", "3/2"],
  //       answer: "1/3",
  //     },

  //     {
  //       question: "Um restaurante está com 13 pessoas: 9 clientes e 4 garçons. Se escolhermos uma pessoa do local, aleatoriamente, qual a probabilidade de ser um cliente?",
  //       options: ["3/13", "9/13", "6/13", "7/13"],
  //       answer: "9/13",
  //     },
  //     {
  //       question: "Se é escolhido aleatoriamente um número da sequência (2, 3, 5, 7, 11, 13, 17, 19) qual a probabilidade de escolher um número primo?",
  //       options: ["3/8", "1", "0","5/8"],
  //       answer: "1",
  //     },
      
  //     {
  //       question: "Se lançarmos uma moeda, qual a probabilidade do lado “cara” ficar voltado para cima?",
  //       options: ["1/3", "1/2", "1/4","0"],
  //       answer: "1/2",
  //     },
      
  //     {
  //       question: "Qual a probabilidade de escolher uma carta no baralho e essa carta não ser um ás? ",
  //       options: ["17/13", "12/13", "14/13","11/13"],
  //       answer: "12/13",
  //     },
      
  //     {
  //       question: "Se em uma turma é formada por 8 alunos do sexo feminino e 7 do sexo masculino e a professora escolher aleatoriamente um estudante para ir ao quadro resolver um exercício, qual a probabilidade de ser selecionada uma aluna?",
  //       options: ["8/15", "7/15", "11/15","13/15"],
  //       answer: "8/15",
  //     },
      
  //     {
  //       question: "Se você escolher aleatoriamente uma letra no alfabeto, qual a probabilidade de selecionar uma vogal?",
  //       options: ["5/13", "7/13", "7/26","5/26"],
  //       answer: "5/26",
  //     }
  //   ],

  // },
  // {
  //       /* QUESTOES MEDIAS */

  //   category: "Médio",
  //   questions: [
  //     {
  //       question: "O valor da expressão (-1)*0 + (-6) : (-2) – 24 é:",
  //       options: ["20", "-21", "19,5", "21"],
  //       answer: "-12",
  //     },
  //     // {
  //     //   question: "O valor de (0,2)^3 + (0,16)^2 é:",
  //     //   options: ["0,0264", "0,0336", "0,2568", "0,6256"],
  //     //   answer: "0,0336",
  //     // },
  //     {
  //       question: "Comprei 5 doces a R$ 1,80 cada um, 3 doces a R$ 1,50 e 2 doces a R$ 2,00 cada. O preço médio, por doce, foi de:",
  //       options: ["R$ 1,75", "R$ 1,85", "R$ 1,93", " R$ 2,00"],
  //       answer: "R$ 1,75",
  //     },
      
  //     {
  //       question: "De uma  urna contendo 10 bolas coloridas, sendo 4 brancas, 3 pretas, 2 vermelhas e 1 verde, retiram-se, de uma vez, 4 bolas. Quantos são os casos possíveis em que aparecem exatamente uma bola de cada cor?",
  //       options: ["120/5040", "72/5040", "24/5040", "18/5040"],
  //       answer: "24/5040",
  //     },
      
  //     {
  //       question: "Um professor de Matemática comprou dois livros para premiar dois alunos de uma classe de 42 alunos. Como são dois livros diferentes, de quantos modos distintos pode ocorrer a premiação?",
  //       options: ["861", "1722", "1764", "3444"],
  //       answer: "1722",
  //     },
      
  //     {
  //       question: "Duas tartarugas estavam juntas e começaram a caminhar em linha reta em direção a um lago distante. A primeira tartaruga percorreu 30 metros por dia e demorou 16 dias para chegar ao lago. A segunda tartaruga só conseguiu percorrer 20 metros por dia e, portanto, chegou ao lago alguns dias depois da primeira. Quando a primeira tartaruga chegou ao lago, o número de dias que ela teve que esperar para a segunda tartaruga chegar foi:",
  //       options: ["8", "9", "10", "12"],
  //       answer: "8",
  //     },
      
  //     {
  //       question: "Quatro suspeitos de praticar um crime fazem as seguintes declarações: João: Carlos é o criminoso, Pedro: eu não sou criminoso, Carlos: Paulo é o criminoso, Paulo: Carlos está mentindo, Sabendo que apenas um dos suspeitos mente, determine quem é o criminoso:",
  //       options: ["João", "Pedro", "Carlos", "Paulo"],
  //       answer: "Carlos",
  //     },
      
  //     // {
  //     //   question: "Dadas as expressões A = -a^2 – 2a + 5 e B = b^2 + 2b + 5:",
  //     //   options: ["Se a = 2 e b = -2, então A = B", "Se a = 2 e b = 2, então A = B", "Se a = -2 e b = -2, então A = B", "Se a = -2 e b = 2, então A = B"],
  //     //   answer: "Se a = -2 e b = -2, então A = B",
  //     // },
      
  //     {
  //       question: "Bianca aproveitou o domingo de Sol para passear com suas duas filhas. Ela comprou um sorvete para cada menina e uma garrafa de suco para ela que custava R$ 5,00. Ela pagou tudo com uma nota de R$ 50,00 e recebeu de troco R$ 36,00. Utilize uma equação para descrever esta situação, depois, determine o preço de cada sorvete.",
  //       options: ["R$ 4,50", "R$ 6,75", "R$ 4,00", "R$ 8,40"],
  //       answer: "R$ 4,50",
  //     },
      
  //     {
  //       question: "Para atender a alta demanda em smartphones, uma fábrica decidiu aumentar o número de produtos produzidos diariamente. Para isso, ela investiu em mais 3 máquinas, totalizando-se 8 máquinas. Sabendo-se que eram produzidos diariamente 750 smartphones, haverá um aumento na produção diária de:",
  //       options: ["1200", "1000", "350", "450"],
  //       answer: "450",
  //     },
  //   ],
  // },
  // {
  //   /* QUESTOES dificil */
   category: "COMENZAR",
    questions: [
      
      // {
      //   question: "As probabilidades de três jogadores marcarem um gol cobrando pênalti são, respectivamente, 1/2, 2/5, e 5/6. Se cada um bater um único pênalti, a probabilidade de todos errarem é igual a:",
      //   options: [ "3%", "5%", "17%", "20%"],
      //   answer: "5%",
      // },
      
      {
        question: "ELLOS ________ MUCHA CERVEZA POR LA NOCHE",
        options: ["HE BEBIDO", "HAS BEBIDO", "HA BEBIDO", "HAN BEBIDO", "HEMOS BEBIDOS", "HABEIS BEBIDO"],
        answer: "HAN BEBIDO",
      },
      {
        question: "HE LEÍDO EL LIBRO QUE TÚ ME ______ ",
        options: ["HAS PRESTADO", "HE PRESTADO", "HA PRESTADO", "HEMOS PRESTADO", "HABEIS PRESTADO", "HAN PRESTADO"],
        answer: "HAS PRESTADO",
      },

      // {
      //   question: "ANA ______ EN LA FIESTA",
      //   options: ["HAS BAILADO", "HE BAILADO", "HA BAILADO", "HEMOS BAILADO", "HABEIS BAILADO", "HAN BAILADO"],
      //   answer: "HA BAILADO",
      // },

      {
        question: "VOSOTROS ________ EL AUTOBÚS",
        options: ["HA PERDIDO", "HE PERDIDO", "HAS PERDIDO", "HAN PERDIDO", "HABEIS PERDIDO", " HEMOS PERDIDO"],
        answer: "HABEIS PERDIDO",
      },

      {
        question: "NATHALIA _______ EN LA FIESTA",
        options: ["HE BAILADO", "HAS BAILADO", "HA BAILADO", "HEMOS BAILADO", "HABEIS BAILADO", "HAN BAILADO"],
        answer: "HA BAILADO",
      },
      {
        question: "BIA _______ SU MERIENDA",
        options: ["HE COMIDO", "HAS COMIDO", "HA COMIDO", "HEMOS COMIDO", "HABEIS COMIDO", "HAN COMIDO"],
        answer: "HE COMIDO"
      },
      {
        question: "YO _______ EN LA PLAYA",
        options: ["HE PASEADO", "HAS PASEADO", "HA PASEADO", "HEMOS PASEADO", "HABEIS PASEADO", "HAN PASEADO"],
        answer: "HE PASEADO"
      }
    
    ],
  },
];

export default data;
