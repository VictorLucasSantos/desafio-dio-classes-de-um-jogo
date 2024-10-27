class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'fez um ataque misterioso';
      }
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
    }
  }
  

  const heroi1 = new Heroi("Aragorn", 87, "guerreiro");
  const heroi2 = new Heroi("Gandalf", 2019, "mago");
  const heroi3 = new Heroi("Jackie Chan", 65, "monge");
  const heroi4 = new Heroi("Naruto", 17, "ninja");
  
  heroi1.atacar();  // Saída esperada: "O guerreiro Aragorn atacou usando espada."
  heroi2.atacar();  // Saída esperada: "O mago Gandalf atacou usando magia."
  heroi3.atacar();  // Saída esperada: "O monge Jackie Chan atacou usando artes marciais."
  heroi4.atacar();  // Saída esperada: "O ninja Naruto atacou usando shuriken."
  