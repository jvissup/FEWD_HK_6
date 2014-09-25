document.getElementById('convert').onclick = convertCelsius;
// document.getElementById('f').onclick = convertFarhenheit;

function convertCelsius(){

	var celsius = document.getElementById('celsius').value
	farhenheit = celsius * 2;
	if (farhenheit > 100){
		document.getElementById('farhenheit').value = 'hot!!';
	} else {
		document.getElementById('farhenheit').value = farhenheit;
	}
}
