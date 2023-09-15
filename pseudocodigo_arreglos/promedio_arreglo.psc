Algoritmo promedio
	// Función que calcula el promedio de un arreglo
	// Entrada: arreglo (arreglo de números)
	// Salida: promedio (promedio de los números)
	
	Definir suma Como Real
	Definir arreglo Como Real
	Definir longitud_arreglo Como Entero
	Definir promedio_valores Como Real
	
	suma <- 0
	promedio_valores <- 0.0
	
	Escribir "Ingrese la longitud del arreglo:"
	Leer longitud_arreglo
	
	// Leer los elementos del arreglo y calcular la suma
	Para i <- 0 Hasta longitud_arreglo - 1 Con Paso 1 Hacer
		Escribir "Ingrese el elemento ", i, ":"
		Leer arreglo
		suma <- suma + arreglo
	Fin Para
	
	// Calcular el promedio
	promedio_valores <- suma / longitud_arreglo
	
	Escribir "El promedio es: ", promedio_valores
Fin Algoritmo