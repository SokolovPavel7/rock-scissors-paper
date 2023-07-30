window.addEventListener('load', () => {
  const countUser = document.querySelector('.count-user'),
    countComp = document.querySelector('.count-comp'),
    userField = document.querySelector('.user-field'),
    compField = document.querySelector('.comp-field'),
    sound = document.querySelector('.sound'),
    play = document.querySelector('.play'),
    fields = document.querySelectorAll('.field');
  let userStep,
    compStep,
    countU = 0,
    countC = 0,
    blocked = false;

  function choiceUser(e) {
    if (blocked) return; //если выбор сделан (камень.., то мы выходим из функции, чтобы нельзя было поменять выбор)
  }

  function choiceComp() {}

  //Функция определения победителя
  function winner() {}

  //функция начала игры
  function playGame() {}

  play.addEventListener('click', playGame);
  userField.addEventListener('click', choiceUser);
});
