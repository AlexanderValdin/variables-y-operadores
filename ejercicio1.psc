Algoritmo Suma
	Escribir "Ingrese dos n�meros"
	Leer num1, num2
	Escribir "Elige el n�mero de la operaci�n que deseas realizar"
	Escribir " 1. suma"
	Escribir " 2. resta"
	Escribir " 3. multiplicaci�n"
	Escribir " 4. divisi�n"
	Escribir " 5. m�dulo"
	Leer opc
	Mientras opc <1 O opc > 5 Hacer
		Segun opc Hacer
			1:
				sum<- num1 + num2
				Escribir "la suma de los n�meros es " , sum
			2:
				resta<- num1 - num2
				Escribir "la resta de los n�meros es " , resta
			3:
				mult<- num1 * num2
				Escribir "la multiplicaci�n de los n�meros es  " , mult
			4:  
				div<- num1/num2
				Escribir "la divisi�n de los n�meros es igual a " , div
			5:
				md<- num1 mod num2
				Escribir "el m�dulo entre los n�meros es " , md
			De Otro Modo:
				Escribir "No ingresaste una opci�n v�lida"
		FinSegun
	FinMientras
FinAlgoritmo
