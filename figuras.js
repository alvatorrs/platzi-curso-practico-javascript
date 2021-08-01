//Código del cuadrado
const ladoCuadrado = 5;
document.write("El lado del cuadrado es: " + ladoCuadrado + "cm" + "<br />");

const perimetroCuadrado = 4*ladoCuadrado;
document.write("El perimetro es: " + perimetroCuadrado + "cm" + "<br />");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
document.write("El área es: " + areaCuadrado + "cm^2" + "<br />");

//Código del triángulo
const ladoTriangulo1 = 5;
const ladoTriangulo2 = 3;
const baseTriangulo = 6;
const alturaTriangulo = 6;
document.write("El lado 1 del cuadrado es: " + ladoTriangulo1 + "cm" + "<br />");
document.write("El lado 2 del cuadrado es: " + ladoTriangulo2 + "cm" + "<br />");
document.write("La base del cuadrado es: " + baseTriangulo + "cm" + "<br />");
document.write("La altura del cuadrado es: " + alturaTriangulo + "cm" + "<br />");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
document.write("El perimetro es: " + perimetroTriangulo + "cm" + "<br />");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2 ;
document.write("El área es: " + areaTriangulo + "cm^2" + "<br />");

//Código del circulo
const radioCirculo = 4;
document.write("El radio del circulo es: " + radioCirculo + "cm" + "<br />");
const diametroCirculo = 2 * radioCirculo;
document.write("El diametro del circulo es: " + diametroCirculo + "cm" + "<br />");
const PI = Math.PI;
document.write("El valor de pi es: " + PI + "<br />");

let perimetroCirculo = PI * diametroCirculo;
    perimetroCirculo = perimetroCirculo.toFixed(3)
document.write("El perimetro del circulo es: " + perimetroCirculo + "cm" + "<br />");

let areaCirculo = Math.pow(radioCirculo,2) * PI;
    areaCirculo = areaCirculo.toFixed(3);
document.write("El área del circulo es: " + areaCirculo + "cm^2" + "<br />");



