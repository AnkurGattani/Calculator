let display = "0";
let buttons = document.querySelectorAll('.button');
let input = document.querySelector('.input');
input.value = display;

Array.from(buttons).forEach((button) => {
	button.addEventListener('click', (e) => {

		let innerHTML = e.target.innerHTML.trim();
		if (innerHTML == '=') {
			display = eval(display);
			input.value = display;
		}
		else if (isOperator(innerHTML)) {
			let prev = display.charAt(display.length - 1);
			if (!isOperator(prev)) {
				display = display + innerHTML;
			}
			input.value = display;
		}
		else if (innerHTML == 'AC') {
			display = "0";
			input.value = display;
		}
		else if (innerHTML == 'DEL') {
			if (display.length == 1)
				display = "0";
			else
				display = display.substring(0, display.length - 1);
			input.value = display;
		}
		else if (innerHTML == '+/-') {
			let temp = Number(display);
			temp *= (-1);
			display = temp.toString();
			input.value = display;
		}
		else if (innerHTML == '.') {
			if (display.indexOf('.') == -1) {
				display = display + innerHTML.trim();
			}
			input.value = display;
		}
		else {
			if (display == '0')
				display = "";
			display = display + e.target.innerHTML.trim();
			input.value = display;
		}
		// console.log(e.target.innerHTML);
	})
})

function isOperator(innerHTML) {
	if (innerHTML == '+' || innerHTML == '-' || innerHTML == '*' || innerHTML == '/' || innerHTML == '%') {
		return true;
	}
	return false;
}

