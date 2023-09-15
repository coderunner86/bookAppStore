Algoritmo minimo_dato
	// Funci�n que encuentra el m�nimo dato en un arreglo
	// Entrada: arreglo (arreglo de n�meros)
	// Salida: minimo (m�nimo dato)
	
	Definir minimo Como Entero
	Definir arreglo Como Entero
	Definir longitud_arreglo Como Entero
	
	minimo <- 0
	
	Escribir "Ingrese la longitud del arreglo:"
	Leer longitud_arreglo
	
	// Leer los elementos del arreglo y encontrar el m�nimo
	Para i <- 0 Hasta longitud_arreglo - 1 Con Paso 1 Hacer
		Escribir "Ingrese el elemento ", i, ":"
		Leer arreglo
		Si arreglo < minimo Entonces
			minimo <- arreglo
		Fin Si
	Fin Para
	
	Escribir "El m�nimo dato es: ", minimo
Fin Algoritmo