/*
	Javascript for website
	Date: 9/5/24
*/

function openMenu() {
	var x = document.getElementById("main-navbar");
	if (x.className === "navbar") {
		x.className += " responsive";
	} else {
		x.className = "navbar";
	}
}