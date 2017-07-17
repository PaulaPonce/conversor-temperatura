var fahrenheit = document.getElementById("fahrenheit");
var celcius = document.getElementById("celcius");
var kelvin = document.getElementById("kelvin");
var reaumur = document.getElementById("reaumur");

function convertirTemperatura(){
	if(fahrenheit.value != "" && celcius.value != "" && kelvin.value != "" && reaumur.value != ""){
		alert("Presione el botón 'Borrar' para realizar otra conversión.");
	}else if(fahrenheit.value != ""){
		celcius.value = fahrenheit.value - 32 * 5/9;
		kelvin.value = fahrenheit.value - 32 * 5/9 + 273.15;
		reaumur.value = fahrenheit.value - 32 * 4/9;
	}else if(celcius.value != ""){
		fahrenheit.value = celcius.value * (9/5 + 32);
		kelvin.value = celcius.value * 1 + 273.15;
		reaumur.value = celcius.value * 4/5;
	}else if(kelvin.value != ""){
		fahrenheit.value = kelvin.value - 273.15 * 9/5 + 32;
		celcius.value = kelvin.value * 1 - 273.15;
		reaumur.value = kelvin.value - 273.15 * 4/5;
	}else if(reaumur.value != ""){
		fahrenheit.value = reaumur.value * 9/4 + 32;
		celcius.value = reaumur.value * 5/4;
		kelvin.value = reaumur.value * 5/4 + 273.15;
	}else{
		alert("Ingrese temperatura en uno de los campos.");
	}
}

function limpiarCampos(){
	fahrenheit.value = "";
	celcius.value = "";
	kelvin.value = "";
	reaumur.value = "";
}