Algoritmo conteo_total
	// Función que cuenta el número de elementos en un arreglo
	// Entrada: arreglo (arreglo de elementos)
	// Salida: conteo (número de elementos)
	
	Definir conteo Como Entero
	Definir arreglo Como Entero
	Definir longitud_arreglo Como Entero
	
	conteo <- 0
	
	Escribir "Ingrese la longitud del arreglo:"
	Leer longitud_arreglo
	
	// Leer los elementos del arreglo
	Para i <- 0 Hasta longitud_arreglo - 1 Con Paso 1 Hacer
		Escribir "Ingrese el elemento ", i, ":"
		Leer arreglo
		conteo <- conteo + 1
	Fin Para
	
	Escribir "El conteo total es: ", conteo
Fin Algoritmo