/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var myCanvas = document.getElementById("myCanvas");
myCanvas.width = 300;
myCanvas.height = 300;
var ctx = myCanvas.getContext("2d");
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min);
}
function getRandomNumberFloor(min, max) {
  return Math.random() * (max - min + 1) + min;
}
var myVinyls = [];
myVinyls.length = getRandomNumber(1, 7);
for (i = 0; i < myVinyls.length; i++) {
  myVinyls[i] = getRandomNumber(1, 7);
}
console.log("начальный", myVinyls);
myCanvas.addEventListener("click", function () {
  myDougnutChart.clear();
  myVinyls.length = getRandomNumber(1, 7);
  for (i = 0; i < myVinyls.length; i++) {
    myVinyls[i] = getRandomNumber(1, 7);
  }
  console.log("после клика", myVinyls);
  myDougnutChart.draw();
});
function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();
}
var Piechart = function Piechart(options) {
  this.options = options;
  this.canvas = options.canvas;
  this.ctx = this.canvas.getContext("2d");
  this.colors = options.colors;
  this.draw = function () {
    myCanvas.width = 300;
    myCanvas.height = 300;
    var total_value = 0;
    var color_index = 0;
    for (var categ in this.options.data) {
      var val = this.options.data[categ];
      total_value += val;
    }
    var start_angle = 0;
    for (categ in this.options.data) {
      val = this.options.data[categ];
      var slice_angle = 2 * Math.PI * val / total_value;
      drawPieSlice(this.ctx, this.canvas.width / 2, this.canvas.height / 2, Math.min(this.canvas.width / getRandomNumberFloor(1, 2), this.canvas.height / getRandomNumberFloor(2, 4)), start_angle, start_angle + slice_angle, this.colors[color_index % this.colors.length]);
      start_angle += slice_angle;
      color_index++;
    }
    if (this.options.doughnutHoleSize) {
      drawPieSlice(this.ctx, this.canvas.width / 2, this.canvas.height / 2, this.options.doughnutHoleSize * Math.min(this.canvas.width / 2, this.canvas.height / 2), 0, 2 * Math.PI, "#fff");
    }
  };
  this.clear = function () {
    myCanvas.width = 0;
    myCanvas.height = 0;
    console.log("зачистка");
  };
};
var myDougnutChart = new Piechart({
  canvas: myCanvas,
  data: myVinyls,
  colors: ["#937e88", "#EB5757", "#F2C94C", "#219653", "#56CCF2", "#2F80ED", "#6FCF97", "#9B51E0"],
  doughnutHoleSize: 0.1
});
myDougnutChart.draw();
/******/ })()
;
//# sourceMappingURL=main.js.map