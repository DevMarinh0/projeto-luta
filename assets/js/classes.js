// Personagens: Knight Or Sorcerer (Guerreiro ou Mago)
// littleMosnter or bigMonster
class Personagem {
  _life = 1;
  maxLife = 1;
  attack = 0;
  defense = 0;

  constructor(nome) {
    this.nome = nome;
  }
  get life() {
    return this._life;
  }
  set life(novaLife) {
    this._life = novaLife < 0 ? 0 : novaLife;
  }
}
class Guerreiro extends Personagem {
  constructor(nome) {
    super(nome);
    this.life = 100;
    this.attack = 20;
    this.defense = 5;
    this.maxLife = this.life;
  }
}
class Mago extends Personagem {
  constructor(nome) {
    super(nome);
    this.life = 80;
    this.attack = 25;
    this.defense = 2.5;
    this.maxLife = this.life;
  }
}
class pequenoMonstro extends Personagem {
  constructor() {
    super("Pequeno Monstro");
    this.life = 50;
    this.attack = 5;
    this.defense = 5;
    this.maxLife = this.life;
  }
}
class grandeMonstro extends Personagem {
  constructor() {
    super("Grande Monstro");
    this.life = 120;
    this.attack = 15;
    this.defense = 6;
    this.maxLife = this.life;
  }
}
class cenario {
  constructor(lutador1, lutador2, lutador1Element, lutador2Element) {
    this.lutador1 = lutador1;
    this.lutador2 = lutador2;
    this.lutador1Element = lutador1Element;
    this.lutador2Element = lutador2Element;
  }
  comecarLuta() {
    this.atualizar();
  }
  atualizar() {
    this.lutador1Element.querySelector(".name").innerHTML = this.lutador1.nome;
    this.lutador2Element.querySelector(".name").innerHTML = this.lutador2.nome;
  }
}
