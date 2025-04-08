let log = new Log(document.querySelector(".log"));
let personagem = new Guerreiro("Bruninho");
let monstro = new PequenoMonstro();
const stage = new Cenario(
  personagem,
  monstro,
  document.querySelector("#hero"),
  document.querySelector("#monster"),
  log
);
stage.comecarLuta();
