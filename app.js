let num = Math.round(Math.random() * 5);
let Ism = prompt(
  "5 sonidan kichik hoxlagan soningizni kiriting agar Random aniqlagan son bilan siz kiritgan son to'g'ri kelsa ajoyib priz bor!"
);
if (num == Ism) {
  javob = '<i class="fa-solid fa-check"></i> Ajoyib!';
  color = document.getElementById("javob").style.color = "green";
} else {
  javob = '<i class="fa-solid fa-xmark"></i> Afsus!';
  color = document.getElementById("javob").style.color = "red";
}
if (num > Ism) {
  urta = ">";
} else {
  urta = "=";
}
if (num < Ism) {
  urta = "<";
}
document.getElementById("num").innerHTML = num;
document.getElementById("son").innerHTML = Ism;
document.getElementById("urta").innerHTML = urta;
document.getElementById("javob").innerHTML = javob;
