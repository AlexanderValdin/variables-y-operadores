Algoritmo Suma
	Escribir "Ingrese dos números"
	Leer num1, num2
	Escribir "Elige el número de la operación que deseas realizar"
	Escribir " 1. suma"
	Escribir " 2. resta"
	Escribir " 3. multiplicación"
	Escribir " 4. división"
	Escribir " 5. módulo"
	Leer opc
	Mientras opc <1 O opc > 5 Hacer
		Segun opc Hacer
			1:
				sum<- num1 + num2
				Escribir "la suma de los números es " , sum
			2:
				resta<- num1 - num2
				Escribir "la resta de los números es " , resta
			3:
				mult<- num1 * num2
				Escribir "la multiplicación de los números es  " , mult
			4:  
				div<- num1/num2
				Escribir "la división de los números es igual a " , div
			5:
				md<- num1 mod num2
				Escribir "el módulo entre los números es " , md
			De Otro Modo:
				Escribir "No ingresaste una opción válida"
		FinSegun
	FinMientras
FinAlgoritmo
