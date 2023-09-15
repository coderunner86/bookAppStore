Algoritmo minimo_dato
	// Función que encuentra el mínimo dato en un arreglo
	// Entrada: arreglo (arreglo de números)
	// Salida: minimo (mínimo dato)
	
	Definir minimo Como Entero
	Definir arreglo Como Entero
	Definir longitud_arreglo Como Entero
	
	minimo <- 0
	
	Escribir "Ingrese la longitud del arreglo:"
	Leer longitud_arreglo
	
	// Leer los elementos del arreglo y encontrar el mínimo
	Para i <- 0 Hasta longitud_arreglo - 1 Con Paso 1 Hacer
		Escribir "Ingrese el elemento ", i, ":"
		Leer arreglo
		Si arreglo < minimo Entonces
			minimo <- arreglo
		Fin Si
	Fin Para
	
	Escribir "El mínimo dato es: ", minimo
Fin Algoritmo