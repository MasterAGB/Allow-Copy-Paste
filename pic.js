//alert($("html").html());
if ($("html body:only-child img:only-child")[0] != undefined) {


	$('body').css('text-align', 'center')
			.css('width', '100%')
			.css('height', '100%')
			;
	$('body').append('<div id="hiddenDiv" style="display:none;"><canvas id="colorhistcanvas" width="400" height="400"></canvas></div>');

	$(document).ready(function() {


		$('img').mouseover(function() {
			$(this).css('-webkit-box-shadow', '0px 0px 40px rgba(0,0,0,0.3)');
		});
		$('img').mouseout(function() {
			$(this).css('-webkit-box-shadow', '');
		});
	})

	function dump(arr, level) {
		var dumped_text = "";
		if (!level) level = 0;

		//The padding given at the beginning of the line.
		var level_padding = "";
		for (var j = 0; j < level + 1; j++) level_padding += "    ";

		if (typeof(arr) == 'object') { //Array/Hashes/Objects
			for (var item in arr) {
				var value = arr[item];

				if (typeof(value) == 'object') { //If it is an array,
					dumped_text += level_padding + "'" + item + "' ...\n";
					dumped_text += dump(value, level + 1);
				} else {
					dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
				}
			}
		} else { //Stings/Chars/Numbers etc.
			dumped_text = "===>" + arr + "<===(" + typeof(arr) + ")";
		}
		return dumped_text;
	}


// Convert to Hex
	function returnHex(num) {
		// Hex can store 16 different values in 1 character
		if (num == '0') return "00";
		if (num == null) return "00";
		num = num.length < 2 ? "0" + num : num
		return num.toString(16);
	}


	function Rgb(pix) {


		//alert(dump(pix));
		var red = returnHex(pix[0]);
		var green = returnHex(pix[1]);
		var blue = returnHex(pix[2]);
		var hex = "#" + red + green + blue;
		/*alert(red);
		 alert(green);
		 alert(blue);*/
		if (pix[3] < 255) {
			return 'transparent';
		}
		return hex;
	}

	var img = new Image;
	img.src = $('img')[0].src;

	img.onload = function() {

		var w = img.width;
		var h = img.height;

		

		if (h < document.height) {
			$('img').css('margin-top', Math.round((document.height - h) / 2) + 'px');
		}

		$(window).resize(function() {
			if (h < document.height) {
				$('img').css('margin-top', Math.round((document.height - h) / 2) + 'px');
			}
		});


		var drawingCanvas = document.getElementById('colorhistcanvas');
		if (drawingCanvas && drawingCanvas.getContext) {
			var context = drawingCanvas.getContext('2d');
			/* // Рисуем окружность
			 context.strokeStyle = "#000";
			 context.fillStyle = "#fc0";
			 context.beginPath();
			 context.arc(100,100,50,0,Math.PI*2,true);
			 context.closePath();
			 context.stroke();
			 context.fill();
			 // Рисуем левый глаз
			 context.fillStyle = "#fff";
			 context.beginPath();
			 context.arc(84,90,8,0,Math.PI*2,true);
			 context.closePath();
			 context.stroke();
			 context.fill();
			 // Рисуем правый глаз
			 context.beginPath();
			 context.arc(116,90,8,0,Math.PI*2,true);
			 context.closePath();
			 context.stroke();
			 context.fill();
			 // Рисуем рот
			 context.beginPath();
			 context.moveTo(70,115);
			 context.quadraticCurveTo(100,130,130,115);
			 context.quadraticCurveTo(100,150,70,115);
			 context.closePath();
			 context.stroke();
			 context.fill();*/


			drawingCanvas.width = w;
			drawingCanvas.height = h;
			context.drawImage($('img')[0], 0, 0);
			var pix_color = Rgb(context.getImageData(w - 1, Math.round(h / 2 - 1), 1, 1).data);
			if (pix_color == 'transparent') {
				$('body').css('background-image', 'url(' + chrome.extension.getURL('transparent.png') + ')');
			} else {
				$('body').css('background-color', pix_color);
			}

		}
	}


}