var fahrenheit = document.getElementById("fahrenheit");
var celsius = document.getElementById("celsius");
var kelvin = document.getElementById("kelvin");
var reaumur = document.getElementById("reaumur");

function convertirTemperatura(){
	if(fahrenheit.value != "" && celsius.value != "" && kelvin.value != "" && reaumur.value != ""){
		alert("Presione el botón 'Borrar' para realizar otra conversión.");
	}else if(fahrenheit.value != ""){
		celsius.value = fahrenheit.value - 32 * 5/9;
		kelvin.value = fahrenheit.value - 32 * 5/9 + 273.15;
		reaumur.value = fahrenheit.value - 32 * 4/9;
	}else if(celsius.value != ""){
		fahrenheit.value = celsius.value * (9/5 + 32);
		kelvin.value = celsius.value * 1 + 273.15;
		reaumur.value = celsius.value * 4/5;
	}else if(kelvin.value != ""){
		fahrenheit.value = kelvin.value - 273.15 * 9/5 + 32;
		celsius.value = kelvin.value * 1 - 273.15;
		reaumur.value = kelvin.value - 273.15 * 4/5;
	}else if(reaumur.value != ""){
		fahrenheit.value = reaumur.value * 9/4 + 32;
		celsius.value = reaumur.value * 5/4;
		kelvin.value = reaumur.value * 5/4 + 273.15;
	}else{
		alert("Ingrese temperatura en uno de los campos.");
	}
}

function limpiarCampos(){
	fahrenheit.value = "";
	celsius.value = "";
	kelvin.value = "";
	reaumur.value = "";
}