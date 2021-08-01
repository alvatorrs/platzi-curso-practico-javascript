//Código del cuadrado

// const ladoCuadrado = 5;
// document.write("El lado del cuadrado es: " + ladoCuadrado + "cm" + "<br />");

function perimetroCuadrado(ladoCuadrado){
     return 4*ladoCuadrado;
}
// document.write("El perimetro es: " + perimetroCuadrado + "cm" + "<br />");

function areaCuadrado(ladoCuadrado){ 
    return ladoCuadrado*ladoCuadrado;
}
// document.write("El área es: " + areaCuadrado + "cm^2" + "<br />");

//Código del triángulo

// const ladoTriangulo1 = 5;
// const ladoTriangulo2 = 3;
// const baseTriangulo = 6;
// const alturaTriangulo = 6;
// document.write("El lado 1 del cuadrado es: " + ladoTriangulo1 + "cm" + "<br />");
// document.write("El lado 2 del cuadrado es: " + ladoTriangulo2 + "cm" + "<br />");
// document.write("La base del cuadrado es: " + baseTriangulo + "cm" + "<br />");
// document.write("La altura del cuadrado es: " + alturaTriangulo + "cm" + "<br />");

function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo){
     return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}
// document.write("El perimetro es: " + perimetroTriangulo + "cm" + "<br />");

function areaTriangulo(baseTriangulo,alturaTriangulo){ 
    return (baseTriangulo * alturaTriangulo)/2 ;
}
// document.write("El área es: " + areaTriangulo + "cm^2" + "<br />");

//Código del circulo

// const radioCirculo = 4;
// document.write("El radio del circulo es: " + radioCirculo + "cm" + "<br />");
function diametroCirculo(radioCirculo){ 
    return 2 * radioCirculo;
}
// document.write("El diametro del circulo es: " + diametroCirculo + "cm" + "<br />");
const PI = Math.PI;
// document.write("El valor de pi es: " + PI + "<br />");

function perimetroCirculo(radioCirculo){ 
    const diametro = diametroCirculo(radioCirculo);
    let perimetro = PI * diametro;
    return Number(perimetro.toFixed(3));
}
// document.write("El perimetro del circulo es: " + perimetroCirculo + "cm" + "<br />");

function areaCirculo(radioCirculo){
     let area = Math.pow(radioCirculo,2) * PI;
    return Number(area.toFixed(3));
}
// document.write("El área del circulo es: " + areaCirculo + "cm^2" + "<br />");



