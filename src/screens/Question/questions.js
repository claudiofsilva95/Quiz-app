const questions = [
  {
    id: 1,
    category: "esportes",
    question: "Qual país sediou a Copa do Mundo de Futebol em 2014?",
    options: ["Alemanha", "Brasil", "África do Sul", "Rússia"],
    answer: "Brasil"
  },
  {
    id: 2,
    category: "esportes",
    question: "Qual atleta é conhecido como 'O Rei do Futebol'?",
    options: ["Pelé", "Maradona", "Messi", "Cristiano Ronaldo"],
    answer: "Pelé"
  },
  {
    id: 3,
    category: "esportes",
    question: "Em que esporte Michael Jordan ficou famoso?",
    options: ["Baseball", "Basquete", "Futebol", "Hóquei"],
    answer: "Basquete"
  },
  {
    id: 4,
    category: "esportes",
    question: "Qual é o país de origem dos Jogos Olímpicos modernos?",
    options: ["Grécia", "Itália", "França", "Inglaterra"],
    answer: "Grécia"
  },
  {
    id: 5,
    category: "esportes",
    question: "Qual time venceu a UEFA Champions League em 2020?",
    options: ["Bayern de Munique", "Paris Saint-Germain", "Liverpool", "Real Madrid"],
    answer: "Bayern de Munique"
  },
  {
    id: 6,
    category: "esportes",
    question: "Qual é o recorde mundial dos 100 metros rasos masculino?",
    options: ["9.58 segundos", "9.63 segundos", "9.69 segundos", "9.72 segundos"],
    answer: "9.58 segundos"
  },
  {
    id: 7,
    category: "esportes",
    question: "Em que esporte se usa uma raquete, uma rede e uma bola amarela?",
    options: ["Tênis", "Badminton", "Pingue-pongue", "Squash"],
    answer: "Tênis"
  },
  {
    id: 8,
    category: "esportes",
    question: "Qual país ganhou a medalha de ouro no futebol nos Jogos Olímpicos de 2016?",
    options: ["Brasil", "Alemanha", "México", "Argentina"],
    answer: "Brasil"
  },
  {
    id: 9,
    category: "esportes",
    question: "Qual é o esporte mais popular no mundo?",
    options: ["Futebol", "Críquete", "Basquete", "Tênis"],
    answer: "Futebol"
  },
  {
    id: 10,
    category: "esportes",
    question: "Quem é conhecido como 'O Homem mais Rápido do Mundo'?",
    options: ["Usain Bolt", "Carl Lewis", "Justin Gatlin", "Yohan Blake"],
    answer: "Usain Bolt"
  },
  {
    id: 11,
    category: "esportes",
    question: "Qual esporte é praticado na Fórmula 1?",
    options: ["Natação", "Corrida de carros", "Ciclismo", "Motocross"],
    answer: "Corrida de carros"
  },
  {
    id: 12,
    category: "esportes",
    question: "Qual país é famoso pelo esporte de Críquete?",
    options: ["Índia", "Brasil", "Itália", "Espanha"],
    answer: "Índia"
  },
  {
    id: 13,
    category: "esportes",
    question: "Qual é a principal competição de rugby realizada na Nova Zelândia?",
    options: ["Six Nations", "Rugby World Cup", "Super Rugby", "Bledisloe Cup"],
    answer: "Rugby World Cup"
  },
  {
    id: 14,
    category: "esportes",
    question: "Quem venceu as Olimpíadas de 2016 no atletismo dos 100 metros rasos?",
    options: ["Usain Bolt", "Justin Gatlin", "Yohan Blake", "Tyson Gay"],
    answer: "Usain Bolt"
  },
  {
    id: 15,
    category: "esportes",
    question: "Qual esporte envolve o uso de um taco e uma bola branca na grama?",
    options: ["Críquete", "Baseball", "Hockey no gelo", "Golfe"],
    answer: "Críquete"
  },
  {
    id: 16,
    category: "esportes",
    question: "Qual país é conhecido pelo esporte de sumô?",
    options: ["Japão", "China", "Coreia", "Tailândia"],
    answer: "Japão"
  },
  {
    id: 17,
    category: "esportes",
    question: "Quem foi o jogador de futebol conhecido como 'El Pibe'?",
    options: ["Maradona", "Pelé", "Ronaldo", "Messi"],
    answer: "Maradona"
  },
  {
    id: 18,
    category: "esportes",
    question: "Qual é o nome da competição de skate mais prestigiada do mundo?",
    options: ["X Games", "Street League", "Tony Hawk's Pro Skater", "Vans Park Series"],
    answer: "X Games"
  },
  {
    id: 19,
    category: "esportes",
    question: "Qual esporte é conhecido como 'o rei dos esportes'?",
    options: ["Futebol", "Tênis", "Críquete", "Rugby"],
    answer: "Futebol"
  },
  {
    id: 20,
    category: "esportes",
    question: "Qual país venceu a Copa do Mundo de 2018?",
    options: ["Alemanha", "França", "Croácia", "Brasil"],
    answer: "França"
  },
  {
    id: 21,
    category: "esportes",
    question: "Qual esporte é praticado no circuito de BMX?",
    options: ["Corrida de obstáculos", "Salto", "Velocidade", "Freestyle"],
    answer: "Velocidade"
  },
  {
    id: 22,
    category: "esportes",
    question: "Qual atleta é famoso por sua técnica de saltos e quebrou recordes de altura na natação?",
    options: ["Michael Phelps", "Ryan Lochte", "Kristin Otto", "Mark Spitz"],
    answer: "Michael Phelps"
  },
  {
    id: 23,
    category: "esportes",
    question: "Qual esporte usa um bastão e uma luva na sua prática profissional?",
    options: ["Hockey", "Beisebol", "Críquete", "Rugby"],
    answer: "Beisebol"
  },
  {
    id: 24,
    category: "esportes",
    question: "Qual é o maior torneio de tênis do mundo?",
    options: ["US Open", "Wimbledon", "Roland Garros", "Australian Open"],
    answer: "Wimbledon"
  },
  {
    id: 25,
    category: "esportes",
    question: "Quem é o maior goleador da história da Champions League?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Raúl González", "Karim Benzema"],
    answer: "Cristiano Ronaldo"
  },
  {
    id: 26,
    category: "esportes",
    question: "Qual esporte é praticado na modalidade de esqui aquático?",
    options: ["Esqui", "Snowboard", "Wakeboard", "Paraquedismo"],
    answer: "Wakeboard"
  },
  {
    id: 27,
    category: "esportes",
    question: "Qual país é famoso pelo esporte de curling?",
    options: ["Canadá", "Rússia", "Noruega", "Suécia"],
    answer: "Canadá"
  },
  {
    id: 28,
    category: "esportes",
    question: "Qual atleta brasileiro conquistou cinco medalhas de ouro na natação em uma única Olimpíada?",
    options: ["César Cielo", "Gabriel Douglas", "Fernando Scherer", "Cesar Cielo"],
    answer: "César Cielo"
  },
  {
    id: 29,
    category: "esportes",
    question: "Qual esporte envolve a prática de saltos de altura, comprimento e trave?",
    options: ["Atletismo", "Ginástica", "Triatlo", "Decatlo"],
    answer: "Atletismo"
  },
  {
    id: 30,
    category: "esportes",
    question: "Qual é a principal competição de futebol feminino na América do Sul?",
    options: ["Copa América Feminina", "Libertadores Feminina", "Jogos Pan-Americanos", "Mundial Feminino"],
    answer: "Copa América Feminina"
  },
  {
    id: 31,
    category: "esportes",
    question: "Quem foi o primeiro bicampeão olímpico na história da ginástica artística?",
    options: ["Nadia Comaneci", "Simone Biles", "Viktor Chukarin", "Larisa Latynina"],
    answer: "Larisa Latynina"
  },
  {
    id: 32,
    category: "esportes",
    question: "Em qual esporte se utiliza o equipamento chamado 'pólo'?",
    options: ["Hóquei", "Críquete", "Pólo", "Rugby"],
    answer: "Pólo"
  },
  {
    id: 33,
    category: "esportes",
    question: "Qual país é o maior vencedor da Copa do Mundo de Rugby?",
    options: ["Nova Zelândia", "África do Sul", "Inglaterra", "Austrália"],
    answer: "Nova Zelândia"
  },
  {
    id: 34,
    category: "esportes",
    question: "Qual atleta brasileiro é conhecido por sua habilidade no vôlei de praia?",
    options: ["Ágatha Bednarczuk", "Bruno Schmidt", "Alison Cerutti", "Emanuel Rego"],
    answer: "Ágatha Bednarczuk"
  },
  {
    id: 35,
    category: "esportes",
    question: "Qual esporte é praticado na modalidade de 'bobsleigh'?",
    options: ["Esqui", "Hóquei no gelo", "Bobsleigh", "Luge"],
    answer: "Bobsleigh"
  },
  {
    id: 36,
    category: "esportes",
    question: "Quem foi o atleta que conquistou a primeira medalha de ouro para o Brasil na história dos Jogos Olímpicos?",
    options: ["César Cielo", "Isabel Clark", "Gustavo Borges", "Adhemar Ferreira da Silva"],
    answer: "Adhemar Ferreira da Silva"
  },
  {
    id: 37,
    category: "esportes",
    question: "Qual esporte é conhecido como 'a rainha dos esportes'?",
    options: ["Futebol", "Basquete", "Voleibol", "Tênis"],
    answer: "Voleibol"
  },
  {
    id: 38,
    category: "esportes",
    question: "Qual país é famoso pelo esporte de atletismo de velocidade, especialmente na corrida de 100m?",
    options: ["Jamaica", "EUA", "Nigéria", "Quênia"],
    answer: "Jamaica"
  },
  {
    id: 39,
    category: "esportes",
    question: "Qual modalidade de arte marcial é praticada com cinturões coloridos e é originária do Japão?",
    options: ["Karate", "Jiu-Jitsu", "Taekwondo", "Judo"],
    answer: "Judo"
  },
  {
    id: 40,
    category: "esportes",
    question: "Qual é a principal competição de ciclismo de estrada que acontece na França?",
    options: ["Tour de France", "Giro d'Italia", "Vuelta a España", "Paris-Roubaix"],
    answer: "Tour de France"
  },
  {
    id: 41,
    category: "esportes",
    question: "Quem é considerado o maior tenista da história em número de títulos de Grand Slam?",
    options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
    answer: "Novak Djokovic"
  },
  {
    id: 42,
    category: "esportes",
    question: "Qual esporte é conhecido pelo seu uso de uma bola de couro e tacos na praia?",
    options: ["Vôlei de praia", "Futevôlei", "Beach Soccer", "Críquete"],
    answer: "Vôlei de praia"
  },
  {
    id: 43,
    category: "esportes",
    question: "Em que esporte o atleta realiza um 'slam dunk'?",
    options: ["Basquete", "Vôlei", "Futebol", "Handebol"],
    answer: "Basquete"
  },
  {
    id: 44,
    category: "esportes",
    question: "Qual país sediou os Jogos Olímpicos de Inverno de 2018?",
    options: ["Canadá", "Noruega", "Rússia", "Coreia do Sul"],
    answer: "Coreia do Sul"
  },
  {
    id: 45,
    category: "esportes",
    question: "Qual esporte envolve o uso de um bastão e uma bola de forma ovalada?",
    options: ["Rugby", "Críquete", "Baseball", "Futebol Americano"],
    answer: "Futebol Americano"
  },
  {
    id: 46,
    category: "esportes",
    question: "Quem é conhecido como 'Rei da Motocross'?",
    options: ["Ricky Carmichael", "Ryan Dungey", "Marvin Musquin", "Eli Tomac"],
    answer: "Ricky Carmichael"
  },
  {
    id: 47,
    category: "esportes",
    question: "Qual modalidade combina corrida, natação e ciclismo?",
    options: ["Triatlo", "Pentatlo", "Decatlo", "Duathlon"],
    answer: "Triatlo"
  },
  {
    id: 48,
    category: "esportes",
    question: "Qual esporte é praticado na modalidade de 'polo aquático'?",
    options: ["Natação", "Vôlei", "Hóquei", "Polo aquático"],
    answer: "Polo aquático"
  },
  {
    id: 49,
    category: "esportes",
    question: "Qual país é famoso pelo esporte de cricket?",
    options: ["Índia", "Paquistão", "Austrália", "Todos os anteriores"],
    answer: "Todos os anteriores"
  },
  {
    id: 50,
    category: "esportes",
    question: "Qual atleta conquistou a medalha de ouro na ginástica artística nas Olimpíadas de Tóquio 2020?",
    options: ["Simone Biles", "Sunisa Lee", "Nikita Nagornyy", "Rebeca Andrade"],
    answer: "Rebeca Andrade"
  },
  {
    id: 51,
    category: "esportes",
    question: "Qual esporte é caracterizado por uma bola oval e o uso de capacete com viseira?",
    options: ["Futebol americano", "Rugby", "Críquete", "Baseball"],
    answer: "Futebol americano"
  },
  {
    id: 52,
    category: "esportes",
    question: "Qual é o principal torneio de basquete universitário dos EUA?",
    options: ["NCAA Tournament", "NBA Finals", "EuroLeague", "Basketball World Cup"],
    answer: "NCAA Tournament"
  },
  {
    id: 53,
    category: "esportes",
    question: "Qual esporte envolve a prática de saltos de trampolim?",
    options: ["Ginástica artística", "Natação sincronizada", "Saltos ornamentais", "Vôlei"],
    answer: "Saltos ornamentais"
  },
  {
    id: 54,
    category: "esportes",
    question: "Quem foi o primeiro atleta a conquistar o ouro na ginástica artística em duas Olimpíadas consecutivas?",
    options: ["Larisa Latynina", "Nadia Comaneci", "Viktor Chukarin", "Simone Biles"],
    answer: "Larisa Latynina"
  },
  {
    id: 55,
    category: "esportes",
    question: "Qual modalidade de combate é praticada com kimono e faixa?",
    options: ["Jiu-Jitsu", "Karate", "Judô", "Taekwondo"],
    answer: "Judô"
  },
  {
    id: 56,
    category: "esportes",
    question: "Qual esporte é conhecido pela prática de corrida de obstáculos com barreiras?",
    options: ["Atletismo", "Pentatlo", "Decatlo", "Hurdles"],
    answer: "Hurdles"
  },
  {
    id: 57,
    category: "esportes",
    question: "Qual país é conhecido por sua tradição no esporte de hóquei no gelo?",
    options: ["Canadá", "Rússia", "Suécia", "Todos os anteriores"],
    answer: "Todos os anteriores"
  },
  {
    id: 58,
    category: "esportes",
    question: "Qual atleta brasileiro ganhou medalha de ouro na bocha nas Olimpíadas de Tóquio?",
    options: ["Alexsandro", "Lúcia Teixeira", "Clécio", "Fábio"],
    answer: "Lúcia Teixeira"
  },
  {
    id: 59,
    category: "esportes",
    question: "Qual esporte usa uma prancha, uma vela e uma quilha?",
    options: ["Vela", "Surfe", "Kitesurf", "Windsurf"],
    answer: "Windsurf"
  },
  {
    id: 60,
    category: "esportes",
    question: "Qual país é famoso pelo esporte de esqui alpino?",
    options: ["Suíça", "Áustria", "França", "Todos os anteriores"],
    answer: "Todos os anteriores"
  },
  {
    id: 61,
    category: "esportes",
    question: "Qual modalidade de atletismo envolve correr uma maratona?",
    options: ["Corrida de longa distância", "Corrida de velocidade", "Caminhada", "Marcha atlética"],
    answer: "Corrida de longa distância"
  },
  {
    id: 62,
    category: "esportes",
    question: "Qual esporte é praticado com uma bola e uma rede na quadra?",
    options: ["Voleibol", "Tênis de mesa", "Badminton", "Todos os anteriores"],
    answer: "Todos os anteriores"
  },
  {
    id: 63,
    category: "esportes",
    question: "Quem foi o primeiro bicampeão olímpico na ginástica artística?",
    options: ["Larisa Latynina", "Nadia Comaneci", "Viktor Chukarin", "Simone Biles"],
    answer: "Larisa Latynina"
  },
  {
    id: 64,
    category: "esportes",
    question: "Qual esporte é conhecido pelo uso de uma bola de couro e um taco na praia?",
    options: ["Vôlei de praia", "Futevôlei", "Beach Soccer", "Críquete"],
    answer: "Vôlei de praia"
  },
  {
    id: 65,
    category: "esportes",
    question: "Qual atleta brasileiro é conhecido por sua habilidade no vôlei de praia?",
    options: ["Ágatha Bednarczuk", "Bruno Schmidt", "Alison Cerutti", "Emanuel Rego"],
    answer: "Ágatha Bednarczuk"
  },
  {
    id: 66,
    category: "esportes",
    question: "Qual esporte envolve a prática de saltos de altura, comprimento e trave?",
    options: ["Atletismo", "Ginástica", "Triatlo", "Decatlo"],
    answer: "Atletismo"
  },
  {
    id: 67,
    category: "esportes",
    question: "Qual é a principal competição de futebol feminino na América do Sul?",
    options: ["Copa América Feminina", "Libertadores Feminina", "Jogos Pan-Americanos", "Mundial Feminino"],
    answer: "Copa América Feminina"
  },
  {
    id: 68,
    category: "esportes",
    question: "Quem foi o atleta que conquistou a primeira medalha de ouro para o Brasil na história dos Jogos Olímpicos?",
    options: ["César Cielo", "Isabel Clark", "Gustavo Borges", "Adhemar Ferreira da Silva"],
    answer: "Adhemar Ferreira da Silva"
  },
  {
    id: 69,
    category: "esportes",
    question: "Qual esporte é conhecido como 'a rainha dos esportes'?",
    options: ["Futebol", "Basquete", "Voleibol", "Tênis"],
    answer: "Voleibol"
  },
  {
    id: 70,
    category: "esportes",
    question: "Qual país é famoso pelo esporte de atletismo de velocidade, especialmente na corrida de 100m?",
    options: ["Jamaica", "EUA", "Nigéria", "Quênia"],
    answer: "Jamaica"
  },
  {
    id: 71,
    category: "esportes",
    question: "Qual modalidade de arte marcial é praticada com cinturões coloridos e é originária do Japão?",
    options: ["Karate", "Jiu-Jitsu", "Taekwondo", "Judo"],
    answer: "Judo"
  },
  {
    id: 72,
    category: "esportes",
    question: "Qual é a principal competição de ciclismo de estrada que acontece na França?",
    options: ["Tour de France", "Giro d'Italia", "Vuelta a España", "Paris-Roubaix"],
    answer: "Tour de France"
  },
  {
    id: 73,
    category: "esportes",
    question: "Quem é considerado o maior tenista da história em número de títulos de Grand Slam?",
    options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
    answer: "Novak Djokovic"
  },
  {
    id: 74,
    category: "esportes",
    question: "Qual esporte é conhecido pelo seu uso de uma bola de couro e tacos na praia?",
    options: ["Vôlei de praia", "Futevôlei", "Beach Soccer", "Críquete"],
    answer: "Vôlei de praia"
  },
  {
    id: 75,
    category: "esportes",
    question: "Em que esporte o atleta realiza um 'slam dunk'?",
    options: ["Basquete", "Vôlei", "Futebol", "Handebol"],
    answer: "Basquete"
  },
  {
    id: 76,
    category: "esportes",
    question: "Qual país sediou os Jogos Olímpicos de Inverno de 2018?",
    options: ["Canadá", "Noruega", "Rússia", "Coreia do Sul"],
    answer: "Coreia do Sul"
  },
  {
    id: 77,
    category: "esportes",
    question: "Qual esporte envolve o uso de uma prancha, uma vela e uma quilha?",
    options: ["Vela", "Surfe", "Kitesurf", "Windsurf"],
    answer: "Windsurf"
  },
  {
    id: 78,
    category: "esportes",
    question: "Qual país é famoso pelo esporte de esqui alpino?",
    options: ["Suíça", "Áustria", "França", "Todos os anteriores"],
    answer: "Todos os anteriores"
  },
  {
    id: 79,
    category: "esportes",
    question: "Qual modalidade de atletismo envolve correr uma maratona?",
    options: ["Corrida de longa distância", "Corrida de velocidade", "Caminhada", "Marcha atlética"],
    answer: "Corrida de longa distância"
  },
  {
    id: 80,
    category: "esportes",
    question: "Qual esporte é praticado com uma bola e uma rede na quadra?",
    options: ["Voleibol", "Tênis de mesa", "Badminton", "Todos os anteriores"],
    answer: "Todos os anteriores"
  },
  {
    id: 81,
    category: "esportes",
    question: "Quem foi o primeiro bicampeão olímpico na ginástica artística?",
    options: ["Larisa Latynina", "Nadia Comaneci", "Viktor Chukarin", "Simone Biles"],
    answer: "Larisa Latynina"
  },
  {
    id: 82,
    category: "esportes",
    question: "Qual esporte é conhecido pelo uso de uma bola de couro e um taco na praia?",
    options: ["Vôlei de praia", "Futevôlei", "Beach Soccer", "Críquete"],
    answer: "Vôlei de praia"
  },
  {
    id: 83,
    category: "esportes",
    question: "Qual atleta brasileiro é conhecido por sua habilidade no vôlei de praia?",
    options: ["Ágatha Bednarczuk", "Bruno Schmidt", "Alison Cerutti", "Emanuel Rego"],
    answer: "Ágatha Bednarczuk"
  },
  {
    id: 84,
    category: "esportes",
    question: "Qual esporte envolve a prática de saltos de altura, comprimento e trave?",
    options: ["Atletismo", "Ginástica", "Triatlo", "Decatlo"],
    answer: "Atletismo"
  },
  {
    id: 85,
    category: "esportes",
    question: "Qual é a principal competição de futebol feminino na América do Sul?",
    options: ["Copa América Feminina", "Libertadores Feminina", "Jogos Pan-Americanos", "Mundial Feminino"],
    answer: "Copa América Feminina"
  },
  {
    id: 86,
    category: "esportes",
    question: "Quem foi o atleta que conquistou a primeira medalha de ouro para o Brasil na história dos Jogos Olímpicos?",
    options: ["César Cielo", "Isabel Clark", "Gustavo Borges", "Adhemar Ferreira da Silva"],
    answer: "Adhemar Ferreira da Silva"
  },
  {
    id: 87,
    category: "esportes",
    question: "Qual esporte é conhecido como 'a rainha dos esportes'?",
    options: ["Futebol", "Basquete", "Voleibol", "Tênis"],
    answer: "Voleibol"
  },
  {
    id: 88,
    category: "esportes",
    question: "Qual país é famoso pelo esporte de atletismo de velocidade, especialmente na corrida de 100m?",
    options: ["Jamaica", "EUA", "Nigéria", "Quênia"],
    answer: "Jamaica"
  },
  {
    id: 89,
    category: "esportes",
    question: "Qual modalidade de arte marcial é praticada com cinturões coloridos e é originária do Japão?",
    options: ["Karate", "Jiu-Jitsu", "Taekwondo", "Judo"],
    answer: "Judo"
  },
  {
    id: 90,
    category: "esportes",
    question: "Qual é a principal competição de ciclismo de estrada que acontece na França?",
    options: ["Tour de France", "Giro d'Italia", "Vuelta a España", "Paris-Roubaix"],
    answer: "Tour de France"
  },
  {
    id: 91,
    category: "esportes",
    question: "Quem é considerado o maior tenista da história em número de títulos de Grand Slam?",
    options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
    answer: "Novak Djokovic"
  },
  {
    id: 92,
    category: "esportes",
    question: "Qual esporte é conhecido pelo seu uso de uma bola de couro e tacos na praia?",
    options: ["Vôlei de praia", "Futevôlei", "Beach Soccer", "Críquete"],
    answer: "Vôlei de praia"
  },
  {
    id: 93,
    category: "esportes",
    question: "Em que esporte o atleta realiza um 'slam dunk'?",
    options: ["Basquete", "Vôlei", "Futebol", "Handebol"],
    answer: "Basquete"
  },
  {
    id: 94,
    category: "esportes",
    question: "Qual país sediou os Jogos Olímpicos de Inverno de 2018?",
    options: ["Canadá", "Noruega", "Rússia", "Coreia do Sul"],
    answer: "Coreia do Sul"
  },
  {
    id: 95,
    category: "esportes",
    question: "Qual esporte envolve o uso de uma prancha, uma vela e uma quilha?",
    options: ["Vela", "Surfe", "Kitesurf", "Windsurf"],
    answer: "Windsurf"
  },
  {
    id: 96,
    category: "esportes",
    question: "Qual país é famoso pelo esporte de esqui alpino?",
    options: ["Suíça", "Áustria", "França", "Todos os anteriores"],
    answer: "Todos os anteriores"
  },
  {
    id: 97,
    category: "esportes",
    question: "Qual modalidade de atletismo envolve correr uma maratona?",
    options: ["Corrida de longa distância", "Corrida de velocidade", "Caminhada", "Marcha atlética"],
    answer: "Corrida de longa distância"
  },
  {
    id: 98,
    category: "esportes",
    question: "Qual esporte é praticado com uma bola e uma rede na quadra?",
    options: ["Voleibol", "Tênis de mesa", "Badminton", "Todos os anteriores"],
    answer: "Todos os anteriores"
  },
  {
    id: 99,
    category: "esportes",
    question: "Quem foi o primeiro bicampeão olímpico na ginástica artística?",
    options: ["Larisa Latynina", "Nadia Comaneci", "Viktor Chukarin", "Simone Biles"],
    answer: "Larisa Latynina"
  },
  {
    id: 100,
    category: "esportes",
    question: "Qual esporte usa uma prancha, uma vela e uma quilha?",
    options: ["Vela", "Surfe", "Kitesurf", "Windsurf"],
    answer: "Windsurf"
  }
];

export { questions };