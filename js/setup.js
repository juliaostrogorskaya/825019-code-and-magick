'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomValue = function (array) {
  var RandomValue = Math.floor(Math.random() * array.length);
  return RandomValue;
};

var WIZARDS = [
  {
    name: WIZARD_NAMES[getRandomValue(WIZARD_NAMES)] + WIZARD_SURNAMES[getRandomValue(WIZARD_SURNAMES)],
    coatColor: WIZARD_COATS[getRandomValue(WIZARD_COATS)],
    eyesColor: WIZARD_EYES[getRandomValue(WIZARD_EYES)]
  },
  {
    name: WIZARD_NAMES[getRandomValue(WIZARD_NAMES)] + WIZARD_SURNAMES[getRandomValue(WIZARD_SURNAMES)],
    coatColor: WIZARD_COATS[getRandomValue(WIZARD_COATS)],
    eyesColor: WIZARD_EYES[getRandomValue(WIZARD_EYES)]
  },
  {
    name: WIZARD_NAMES[getRandomValue(WIZARD_NAMES)] + WIZARD_SURNAMES[getRandomValue(WIZARD_SURNAMES)],
    coatColor: WIZARD_COATS[getRandomValue(WIZARD_COATS)],
    eyesColor: WIZARD_EYES[getRandomValue(WIZARD_EYES)]
  },
  {
    name: WIZARD_NAMES[getRandomValue(WIZARD_NAMES)] + WIZARD_SURNAMES[getRandomValue(WIZARD_SURNAMES)],
    coatColor: WIZARD_COATS[getRandomValue(WIZARD_COATS)],
    eyesColor: WIZARD_EYES[getRandomValue(WIZARD_EYES)]
  }
];

for (var i = 0; i < WIZARDS.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = WIZARDS[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = WIZARDS[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = WIZARDS[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}
