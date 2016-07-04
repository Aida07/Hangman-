
var fruits = ["pera","manzana","melocoton","sandia"];

function showFirstFruit () {
document.getElementById('word').innerHTML = fruits[0];
}
showFirstFruit ();

function sameInputShow () {
	var equal = document.getElementById('text').value
	if (equal = fruits[1]) {
		document.getElementById('letras').innerHTML = "YOU ARE AWESOME"
	} else {
		document.getElementById('letras').innerHTML = "YOU ARE wrong!!"
	}
};

sameInputShow ();
