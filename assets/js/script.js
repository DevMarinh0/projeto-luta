let personagem = new Guerreiro("Bruninho");
// console.log(personagem.nome);
// console.log(personagem.life);
let monstro = new pequenoMonstro();
// console.log(monstro.nome);
// console.log(monstro.life);
const stage = new cenario(
  personagem,
  monstro,
  document.querySelector("#hero"),
  document.querySelector("#monster")
);
stage.comecarLuta();
