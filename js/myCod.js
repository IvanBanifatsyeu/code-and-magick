"use strict";

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 200;


var renderCloud = function (ctx, x, y, color) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + CLOUD_WIDTH / 2 , y + 10);
	ctx.lineTo(x + CLOUD_WIDTH, y);
	ctx.lineTo(x + CLOUD_WIDTH - 20, y + CLOUD_HEIGHT / 2 );
	ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
	ctx.lineTo(x + CLOUD_WIDTH / 2 , y + CLOUD_HEIGHT - 10);
	ctx.lineTo(x, y + CLOUD_HEIGHT);
	ctx.lineTo(x + 20, y + CLOUD_HEIGHT / 2);
	ctx.closePath();
	ctx.fillStyle = color;
	ctx.fill();
	
	
};

window.renderStatistics = function (ctx) {
	renderCloud(ctx, 110, 60, "rgba(0, 0, 0, 0.5)");
	renderCloud(ctx, 100, 50, "#fff");
};


