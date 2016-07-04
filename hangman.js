// LISTA DE PALABRAS 

var fruits = ["pera","manzana","melocoton","sandia"];

// RECIBIR PALABRAS DE MANERA ALEATORIA

var wordRandom = fruits[Math.floor(Math.random()*fruits.length)]; //En esta variable se almacena la palabra aleatoriamente.
console.log(wordRandom);

// OBTENER LA PALABRA, SEPARAR POR LETRAS Y MOSTRAR CON GUIONES

var arrayLetter = []; // array de letras de nuestra palabra aleatoria.
var arrayDash = []; // array de guiones.

function getWordDash (){
	for(i = 0; i < wordRandom.length; i++) { // Recorre la palabra escogida al azar y lee las letras una por una.
		var letter = wordRandom[i]; // En la variable letter se almacena cada letra una por una.
		arrayLetter.push(letter); // Se añade en el array vacío las letras que ha leído una por una.
		
		var sustitute = letter.replace(letter, " _ "); // La función replace necesita pasarle dos parámetros.
		arrayDash.push(sustitute);
	};

	$('#word').append(arrayDash.join(" "));   // .append() ---> Insert content, specified by the parameter, to the end of each element in the set of matched elements.
	console.log(arrayDash);					  // .join() ---> The join() method joins the elements of an array into a string, and returns the string. By default is a comma.
	console.log(arrayLetter);
};

// COMPARAR EL VALOR INTRODUCIDO CON LOS VALORES DE LA PALABRA ALEATORIA.

function result (){
	var value = $('#text').val(); // Almacenar el valor introducido.
	for(i= 0; i < arrayLetter.length; i++){
		if(arrayLetter[i] === value){ // Si la letra corresponde a la letra introducida, el guión se convierte en letra.
			arrayDash[i] = arrayLetter[i];
			$('#word').text(arrayDash.join(" "));
			console.log("You are right");
		} else {
			console.log("You are wrong");
		};
	};
};

// HACER LA LLAMADA A AMBAS FUNCIONES: DAR FUNCIONALIDAD AL INPUT CON LA INTERACCIÓN DEL USUARIO

$(document).on('ready', function(){
	getWordDash();
	$('#intro').on('click', function(){
		result();
	});
});








/*function showFirstFruit () {
document.getElementById('word').innerHTML = wordRandom;
}
showFirstFruit ();
*/









// COMPROBAR SI LAS PALABRAS SE MUESTRAN EN EL HTML 

/*function showFirstFruit () {
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

sameInputShow ();*/
