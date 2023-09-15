Algoritmo suma_total
	// Función que calcula la suma total de un arreglo
	// Entrada: arreglo (arreglo de números)
	// Salida: suma (suma total)
	
	Definir suma Como Entero
	Definir arreglo Como Entero
	Definir longitud_arreglo Como Entero
	suma <- 0
	Escribir "Ingrese la longitud del arreglo:"
	Leer longitud_arreglo
	
	// Leer los elementos del arreglo
	Para i <- 0 Hasta longitud_arreglo - 1 Con Paso 1 Hacer
		Escribir "Ingrese el elemento ", i, ":"
		Leer arreglo
		suma <- suma + arreglo
	Fin Para
	
	Escribir "La suma total es: ", suma
Fin Algoritmo