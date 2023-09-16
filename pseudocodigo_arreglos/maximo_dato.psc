Algoritmo maximo_dato
	// Función que encuentra el maximo dato en un arreglo
	// Entrada: arreglo (arreglo de números)
	// Salida: maximo (maximo dato)
	
	Definir maximo Como Entero
	Definir arreglo Como Entero
	Definir longitud_arreglo Como Entero
	
	maximo <- 0
	
	Escribir "Ingrese la longitud del arreglo:"
	Leer longitud_arreglo
	
	// Leer los elementos del arreglo y encontrar el maximo
	Para i <- 0 Hasta longitud_arreglo - 1 Con Paso 1 Hacer
		Escribir "Ingrese el elemento ", i, ":"
		Leer arreglo
		Si arreglo > maximo Entonces
			maximo <- arreglo
		Fin Si
	Fin Para
	
	Escribir "El maximo dato es: ", maximo
Fin Algoritmo