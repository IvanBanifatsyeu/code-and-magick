"use strict";

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 200;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var CLOUD_GAP = 10;
var GAP = 20;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT_MAX = 100;
var BAR_WIDTH = 40;
var LINE_COLOMN_Y = 220;

var renderCloud = function (ctx, x, y, color) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + CLOUD_WIDTH / 2, y + 10);
	ctx.lineTo(x + CLOUD_WIDTH, y);
	ctx.lineTo(x + CLOUD_WIDTH - 10, y + CLOUD_HEIGHT / 2);
	ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
	ctx.lineTo(x + CLOUD_WIDTH / 2, y + CLOUD_HEIGHT - 10);
	ctx.lineTo(x, y + CLOUD_HEIGHT);
	ctx.lineTo(x + 10, y + CLOUD_HEIGHT / 2);
	ctx.closePath();
	ctx.fillStyle = color;
	ctx.fill();
};

var getMaxElement = function (arr) {
	var maxElement = arr[0];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > maxElement) {
			maxElement = arr[i];
		}
	}
	return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
	renderCloud(
		ctx,
		CLOUD_X + CLOUD_GAP,
		CLOUD_Y + CLOUD_GAP,
		"rgba(0, 0, 0, 0.4)"
	);
	renderCloud(ctx, CLOUD_X, CLOUD_Y, "#fff");

	var f = new FontFace("PTMono", "url(/fonts/PTMono.ttf)");
	f.load().then(function (PTMono) {
		document.fonts.add(PTMono);

		ctx.font = "16px PTMono";
		ctx.fillStyle = "black";

		ctx.fillText("Ура вы победили!", 120, 75);
		ctx.fillText("Список результатов:", 120, 95);
	});

	var maxTime = getMaxElement(times);

	for (var i = 0; i < players.length; i++) {
		ctx.fillStyle = "black";
		ctx.fillText(
			players[i],
			CLOUD_X + 3 * GAP + i * (3 * GAP + TEXT_WIDTH),
			CLOUD_Y + CLOUD_HEIGHT - 0.7 * GAP
		);

		function randomBlue() {
			var random = Math.random();
			return "rgba(" + 0 + "," + 0 + "," + 255 + "," + random + ")";
		}

		ctx.font = "16px PTMono";

		ctx.fillText(
			Math.round(times[i]),
			CLOUD_X + 3 * GAP + i * (3 * GAP + TEXT_WIDTH),
			LINE_COLOMN_Y - (BAR_HEIGHT_MAX * times[i]) / maxTime - 7
		);

		var color = randomBlue();

		if (players[i] == "Вы") {
			ctx.fillStyle = "rgba(255, 0, 0, 1)";
		} else {
			ctx.fillStyle = color;
		}

		ctx.fillRect(
			CLOUD_X + 3 * GAP + i * (3 * GAP + TEXT_WIDTH),
			LINE_COLOMN_Y - (BAR_HEIGHT_MAX * times[i]) / maxTime,
			BAR_WIDTH,
			(BAR_HEIGHT_MAX * times[i]) / maxTime
		);
	}
};
