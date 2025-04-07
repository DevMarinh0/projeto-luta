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
