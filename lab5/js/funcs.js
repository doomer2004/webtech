createList()

function getRectangleSize(side) {
	const rectangleOut = document.getElementById("block__4");

	S = (Math.sqrt(25 + 10 * Math.sqrt(5)) / 4) * (side * side);
	rectangleOut.textContent = Math.round(S);
}

function revertNums(nums) {
	let str = ''
	for (let i = nums.length - 1; i >= 0; i--) {
		str += nums.at(i);
	}
	document.cookie = ("nums=" + str);
	result = confirm(str);
	if (result) {
		document.cookie = "nums=";
		location.reload();
	}
}

function setBorderColor(color) {
	const divs = document.getElementsByTagName("div");

	for (let i = 0; i < divs.length; i++) {
		divs[i].style.borderColor = "#" + color;
	}
	window.localStorage.setItem("borderColor", color);
}

function createList() {
	textbox4 = document.getElementById('block__4');
	textbox1 = document.getElementById('block__1');
	textbox1.onclick = function (event) {

		getListFromForm(textbox1, createForm(textbox4));
	}
	textbox1 = document.getElementById('block__2');
	textbox1.onclick = function (event) {

		getListFromForm(textbox1, createForm(textbox4));
	}
	textbox1 = document.getElementById('block__3');
	textbox1.onclick = function (event) {

		getListFromForm(textbox1, createForm(textbox4));
	}
	textbox1 = document.getElementById('block__4');
	textbox1.onclick = function (event) {

		getListFromForm(textbox1, createForm(textbox4));
	}
	textbox1 = document.getElementById('block__5');
	textbox1.onclick = function (event) {

		getListFromForm(textbox1, createForm(textbox4));
	}
	textbox1 = document.getElementById('block__6');
	textbox1.onclick = function (event) {

		getListFromForm(textbox1, createForm(textbox4));
	}
	textbox1 = document.getElementById('block__7');
	textbox1.onclick = function (event) {

		getListFromForm(textbox1, createForm(textbox4));
	}
}
function createForm(div) {
	form = document.createElement('form');
	input = document.createElement('input');
	input.type = 'text';
	input.name = 'elements';

	button1 = document.createElement('input');
	button1.type = 'button';
	button1.value = '1';
	button1.onclick = function (event) { addtolocale(div); }

	button2 = document.createElement('input');
	button2.type = 'button';
	button2.value = '2';
	button2.onclick = function (event) { removefromlocale(div) }

	form.name = "listForm";
	form.appendChild(input);
	form.appendChild(button1);
	form.appendChild(button2);

	div.appendChild(form);
	return button;
}

function addtolocale(div) {
	localStorage.setItem('oldstyle', div.style);
	localStorage.setItem('1', document.forms["listForm"]["elements"].value);
	div.style = localStorage.getItem('1');
}

function removefromlocale(div) {
	div.style = localStorage.getItem('oldstyle');
	localStorage.clear();

}