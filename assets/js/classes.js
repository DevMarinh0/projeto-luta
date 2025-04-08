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
class PequenoMonstro extends Personagem {
  constructor() {
    super("Pequeno Monstro");
    this.life = 50;
    this.attack = 5;
    this.defense = 5;
    this.maxLife = this.life;
  }
}
class GrandeMonstro extends Personagem {
  constructor() {
    super("Grande Monstro");
    this.life = 120;
    this.attack = 15;
    this.defense = 6;
    this.maxLife = this.life;
  }
}
class Cenario {
  constructor(lutador1, lutador2, lutador1Element, lutador2Element, logObject) {
    this.lutador1 = lutador1;
    this.lutador2 = lutador2;
    this.lutador1Element = lutador1Element;
    this.lutador2Element = lutador2Element;
    this.log = logObject;
  }
  comecarLuta() {
    this.atualizar();
    //Atacar
    this.lutador1Element
      .querySelector(".attackButton")
      .addEventListener("click", () =>
        this.fazerAttack(this.lutador1, this.lutador2)
      );
    //Atacar
    this.lutador2Element
      .querySelector(".attackButton")
      .addEventListener("click", () =>
        this.fazerAttack(this.lutador2, this.lutador1)
      );
  }
  atualizar() {
    //lutador 1
    this.lutador1Element.querySelector(".name").innerHTML = `${
      this.lutador1.nome
    } -  ${this.lutador1.life.toFixed(1)} HP`;
    let l1Porcent = (this.lutador1.life / this.lutador1.maxLife) * 100;
    this.lutador1Element.querySelector(".bar").style.width = `${l1Porcent}%`;
    //lutador 2
    this.lutador2Element.querySelector(".name").innerHTML = `${
      this.lutador2.nome
    } -  ${this.lutador2.life.toFixed(1)} HP`;
    let l2Porcent = (this.lutador2.life / this.lutador2.maxLife) * 100;
    this.lutador2Element.querySelector(".bar").style.width = `${l2Porcent}%`;
  }
  fazerAttack(atacando, atacado) {
    //se alguem morrer, não faz nada
    if (atacando.life <= 0 || atacado.life <= 0) {
      this.log.addMensagem("Luta encerrada!");
      return;
    }

    let ataqueFactor = (Math.random() * 1).toFixed(2);
    let defesaFactor = (Math.random() * 1).toFixed(2);

    let ataqueAtual = atacando.attack * ataqueFactor;
    let defesaAtual = atacado.defense * defesaFactor;

    if (ataqueAtual > defesaAtual) {
      let dano = ataqueAtual - defesaAtual;
      atacado.life -= dano;
      this.log.addMensagem(
        `${atacando.nome} atacou ${atacado.nome} e causou ${dano.toFixed(
          2
        )} de dano`
      );
    } else {
      this.log.addMensagem(
        `${atacado.nome} conseguiu Defender o ataque de ${atacando.nome}`
      );
    }
    this.atualizar();
  }
}
class Log {
  lista = [];
  constructor(listaElement) {
    this.listaElement = listaElement;
  }
  addMensagem(mensagem) {
    this.lista.push(mensagem);
    this.mostrar();
  }
  mostrar() {
    this.listaElement.innerHTML = "";
    for (let i in this.lista) {
      this.listaElement.innerHTML += `<li>${this.lista[i]}</li>`;
    }
  }
}
