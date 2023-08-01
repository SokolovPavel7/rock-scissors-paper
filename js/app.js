window.addEventListener('load', () => {
  const countUser = document.querySelector('.count-user'),
    countComp = document.querySelector('.count-comp'),
    userField = document.querySelector('.user-field'),
    compField = document.querySelector('.comp-field'),
    sound = document.querySelector('.sound'),
    res = document.querySelector('.result'),
    play = document.querySelector('.play'),
    fields = document.querySelectorAll('.field');
  let userStep,
    compStep,
    countU = 0,
    countC = 0,
    blocked = false;

  function choiceUser(e) {
    if (blocked) return; //если выбор сделан (камень.., то мы выходим из функции, чтобы нельзя было поменять выбор)
    let target = e.target;
    //Метод contains позволяет проверить, содержит ли один элемент внутри себя другой
    if (target.classList.contains('field')) {
      userStep = target.dataset.field; //записываем результат полученного выбора через атрибут
      fields.forEach((item) => item.classList.remove('active', 'error'));
      target.classList.add('active');
      choiceComp();
    }
  }

  function choiceComp() {
    blocked = true; //для того, чтобы пока компьютер думает, мы не передумали
    let rand = Math.floor(Math.random() * 3);
    compField.classList.add('blink');
    let compFields = compField.querySelectorAll('.field');
    console.log(compFields);

    setTimeout(() => {
      compField.classList.remove('blink');
      compStep = compFields[rand].dataset.field;
      compFields[rand].classList.add('active');
      winner();
    }, 3000);
  }

  //Функция определения победителя
  function winner() {
    blocked = false;
    let comb = userStep + compStep
    
    switch (comb) {
      case 'rr':
      case 'ss':
      case 'pp':
        res.innerText = 'Ничья!';
        sound.setAttribute('src', 'audio/draw.mp3');
        sound.play();
        break;

      case 'rs':
      case 'sp':
      case 'pr':
        res.innerText = 'Победил человек!';
        sound.setAttribute('src', 'audio/win.mp3');
        sound.play();
        countU++;
        countUser.innerText = countU;
        compField.querySelector('[data-field='+ compStep +']').classList.add('error')
        break;

      case 'sr':
      case 'ps':
      case 'rp':
        res.innerText = 'Победил компьютер!';
        sound.setAttribute('src', 'audio/loss.mp3');
        sound.play();
        countC++;
        countComp.innerText = countC;
        userField.querySelector('[data-field='+ userFieldStep +']').classList.add('error')
        break;
    }
    
  }

  //функция начала игры
  function playGame() {
    countU = countC = 0;
    res.innerText = 'Сделайте выбор!';
    countUser.innerText = '0';
    countComp.innerText = '0';
    fields.forEach(item => item.classList.remove('active', 'error'))
  }

  play.addEventListener('click', playGame);
  userField.addEventListener('click', choiceUser);
});
