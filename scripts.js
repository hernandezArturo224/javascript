function muestraPar(){
	var sign = prompt("Introduce un numero para saber si es par o impar");

	if(sign%2 === 0){
		alert("El numero es par");
	}else{
		alert("El numero es impar");
	}
}

function compruebaPalindromo(){
	var cadena = prompt("Introduce una palabra para saber si es palindromo o no");
	cadena = cadena.toLowerCase();
	cadena = cadena.replace(/ /, "");

	for(var i=0;i<cadena.length;i++){
		if(cadena[i] != cadena[cadena.length - i - 1]){
			return false;
		}
	}

	return true;
}

function esPalindromo(){
	if(compruebaPalindromo()){
		alert("Si es un palindromo");
	}else{
		alert("No es un palindromo");
	}
}

function botonUno(){
	document.getElementById("texto").innerHTML="Boton 1 clickado";
}

function botonDos(){
	document.getElementById("texto").innerHTML="Boton 2 clickado";
}

function botonTres(){
	document.getElementById("texto").innerHTML="Boton 3 clickado";
}


function escribeAlReves(){
	var cadena = document.getElementById("texto").value;

	var resultado="";
	for(var i=cadena.length-1; i>=0 ;i--){
		resultado = resultado+cadena.charAt(i);
	}

	alert(resultado);
}

$("document").ready(function(){

	$("body").append("<h1>I love jQuery</h1>")

});
