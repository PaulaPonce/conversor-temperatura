function convertirCelsius(celsius){
	var celsius = document.getElementById("celsius").value;
	//var fahr = document.getElementById("fahrenheit");
	var resultado = (1.8 * celsius) + 32; 
	alert(celsius + " °C = " + resultado + "°F");
	document.getElementById("fahrenheit")=resultado;
}