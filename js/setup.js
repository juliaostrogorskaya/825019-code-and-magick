'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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

var generateWizard = function () {
  var newWizard = {
    name: WIZARD_NAMES[getRandomValue(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[getRandomValue(WIZARD_SURNAMES)],
    coatColor: WIZARD_COATS[getRandomValue(WIZARD_COATS)],
    eyesColor: WIZARD_EYES[getRandomValue(WIZARD_EYES)]
  };
  return newWizard;
};

var wizards = [];
for (var i = 0; i < 4; i++) {
  var newWizard = generateWizard();
  wizards.push(newWizard);
}

var createWizard = function (wizard, template) {
  var wizardElement = template.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var createFragment = function () {
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(createWizard(wizards[j], similarWizardTemplate));
    similarListElement.appendChild(fragment);
  }
};
createFragment();

document.querySelector('.setup-similar').classList.remove('hidden');
