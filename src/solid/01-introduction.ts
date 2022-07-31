/*
 Single responsability. Desing components exposed only to one change source

 Open/Closed: open to extention but open for modification

 Liskov Substitution: Las funciones que utilicen punteros o referencias a la clase deben ser capaces de usar objetos de clases derivadas sin saberlo

 Interface segregation: Los clientes no deberan verse forzados a depender de las interfaces que no usan

 Dependency inversion: 
 + Los módulos de alto nivel no deben depender de los módulos de bajo nivel. 
 + Ambos deben depender de abstraciones.
 + Las abstraciones no deben depender de detalles.
 + Los detalles deben depender de abstracciones.

 Los componentes más importantes son aquellos centrados en resolver el problema subyacente al negocio, es decir, la capa de dominio.
 Los menos importantes son las que estan próximos a la infraestructura, es decir, aquellos relacionados con la UI, la persistencia, la comunicación con API extenas, etc.
 
*/
