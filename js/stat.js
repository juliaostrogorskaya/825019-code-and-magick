'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = -150;
var BAR_GAP = 50;
var BAR_Y = 230;
var NAMES_Y = 260;
var TEXT_X = 125;
var TEXT_Y = 40;
var TEXT_LINE_HEIGHT = 20;
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

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = "#000";
    ctx.font = '16px PT Mono';
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, NAMES_Y);
    if(names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = BAR_COLOR;
    }
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP)* i, BAR_Y, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }

  ctx.fillStyle = "#000";
  ctx.fillText('Ура вы победили!', TEXT_X, TEXT_Y);
  ctx. fillText('Список результатов:', TEXT_X, TEXT_Y + TEXT_LINE_HEIGHT);
};
