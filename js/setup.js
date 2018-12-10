'use strict';

var WIZARD_COUNT = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

/* var showSetup = function () {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
};
showSetup();*/

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomValue = function (array) {
  var RandomValue = Math.floor(Math.random() * array.length);
  return RandomValue;
};

// функция создания одного волшебника(массив)
var generateWizard = function () {
  var newWizard = {
    name: WIZARD_NAMES[getRandomValue(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[getRandomValue(WIZARD_SURNAMES)],
    coatColor: WIZARD_COATS[getRandomValue(WIZARD_COATS)],
    eyesColor: WIZARD_EYES[getRandomValue(WIZARD_EYES)]
  };
  return newWizard;
};

// функция создания массива волшебников
var generateAllWizards = function () {
  var wizards = [];
  for (var i = 0; i < WIZARD_COUNT; i++) {
    var newWizard = generateWizard();
    wizards.push(newWizard);
  }
  return wizards;
};

// функция создания одного волшебника
var renderWizard = function (wizard, template) {
  var wizardElement = template.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

// функция создания и отрисовки волшебников
var createWizardsFragment = function (wizards, template) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i], template));
  }
  return fragment;
};

// отрисовка волшебников
var drawWizards = function () {
  similarListElement.appendChild(createWizardsFragment(generateAllWizards(), similarWizardTemplate));
};

drawWizards();

document.querySelector('.setup-similar').classList.remove('hidden');

// следующее задание
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var setupButtonSave = setup.querySelector('.setup-submit');
var setupForm = document.querySelector('.setup-wizard-form');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && !setupUserName.focus) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupButtonSave.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    evt.preventDefault();
    setupForm.submit();
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = WIZARD_COATS[getRandomValue(WIZARD_COATS)];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = WIZARD_EYES[getRandomValue(WIZARD_EYES)];
});

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.backgroundColor = WIZARD_FIREBALL[getRandomValue(WIZARD_FIREBALL)];
});
