'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = -150;
var BAR_GAP = 50;
var TEXT_Y = 260;
var BAR_COLOR = getBarColor();

function getBarColor() {
  var hue = 240;
  var lightness = 50 + '%';
  var saturation = Math.floor(Math.random()*100) + '%';
  return 'hsl' + "(" + hue + ',' + saturation +',' + lightness + ")";
}

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
   if (arr[i] > maxElement) {
     maxElement = arr[i];
   }
 }
  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  /*var playerIndex = 0;
  var playerName = 'Вы';*/
  //var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    /* MAX_BAR      BAR[I]
     ----------- = --------
      BAR_HEIGHT       X

      X = (BAR_HEIGHT * BAR[I]) / MAX_BAR */
    ctx.fillStyle = "#000";
    ctx.font = '16px PT Mono';
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, TEXT_Y);
    if(names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = BAR_COLOR;
    }
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP)* i, 220, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }

  ctx.fillStyle = "#000";
  ctx.fillText('Ура вы победили!', 125, 40);
  ctx. fillText('Список результатов:', 125, 60);

  getGameResults(ctx, names, times);
/*  ctx.fillStyle = "#000";
  ctx.font = '16px PT Mono';
  ctx.fillText(playerName, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP)*playerIndex, TEXT_Y);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP)*playerIndex, 50, BAR_WIDTH, 150);

  var playerIndex = 1;
  var playerName = 'Кекс';
  ctx.fillStyle = "#000";
  ctx.font = '16px PT Mono';
  ctx.fillText(playerName, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP)*playerIndex, TEXT_Y);
  ctx.fillStyle = '#4157fe';
  ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP)*playerIndex, 50, BAR_WIDTH, 150);

  var playerIndex = 2;
  var playerName = 'Катя';
  ctx.fillStyle = "#000";
  ctx.font = '16px PT Mono';
  ctx.fillText(playerName, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP)*playerIndex, TEXT_Y);
  ctx.fillStyle = '#4157fe';
  ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP)*playerIndex, 50, BAR_WIDTH, 150);

  var playerIndex = 3;
  var playerName = 'Игорь';
  ctx.fillStyle = "#000";
  ctx.font = '16px PT Mono';
  ctx.fillText(playerName, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP)*playerIndex, TEXT_Y);
  ctx.fillStyle = '#4157fe';
  ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP)*playerIndex, 50, BAR_WIDTH, 150);*/
};
