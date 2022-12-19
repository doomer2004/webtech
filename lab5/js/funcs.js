function getRectangleSize(side) {
	const rectangleOut = document.getElementById("rectangle");

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
		divs[i].style.backgroundColor = color;
	}
	window.localStorage.setItem("borderColor", color);
}