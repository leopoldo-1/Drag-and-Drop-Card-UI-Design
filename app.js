const learnCSS = document.getElementById("learnCSS");

const levelOne = document.getElementById("levelOne");
const leveTwo = document.getElementById("levelTwo");
const levelThree = document.getElementById("levelThree");

new Sortable(learnCSS, {
  animation: 750,
  ghostClass: "ghostClass",
  chosenClass: "chosenClass"
});

new Sortable(levelOne, {
  animation: 150,
  ghostClass: "ghostClass",
  chosenClass: "chosenClass"
});

new Sortable(levelTwo, {
  animation: 150,
  ghostClass: "ghostClass",
  chosenClass: "chosenClass"
});

new Sortable(levelThree, {
  animation: 150,
  ghostClass: "ghostClass",
  chosenClass: "chosenClass"
});