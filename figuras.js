//Código del cuadrado

function perimetroCuadrado(ladoCuadrado){
     return 4*ladoCuadrado;
}

function areaCuadrado(ladoCuadrado){ 
    return ladoCuadrado*ladoCuadrado;
}

//Código del triángulo

function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo){
     return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}

function alturaTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo){

    if( (ladoTriangulo1 == ladoTriangulo2) && (baseTriangulo != ladoTriangulo1) ){
    let altura = Math.sqrt( Math.pow(ladoTriangulo1,2) - Math.pow(baseTriangulo/2,2) );
     return Number(altura.toFixed(3));
    }
}

function areaTriangulo(LadoTriangulo,baseTriangulo){ 
    return (baseTriangulo * alturaTriangulo(LadoTriangulo,baseTriangulo))/2 ;
}

//Código del circulo

function diametroCirculo(radioCirculo){ 
    return 2 * radioCirculo;
}

const PI = Math.PI;

function perimetroCirculo(radioCirculo){ 
    const diametro = diametroCirculo(radioCirculo);
    let perimetro = PI * diametro;
    return Number(perimetro.toFixed(3));
}

function areaCirculo(radioCirculo){
     let area = Math.pow(radioCirculo,2) * PI;
    return Number(area.toFixed(3));
}

//Interacción con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = Number(input.value);
    const perimetro = perimetroCuadrado(value);
    return alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = Number(input.value);
    const area = areaCuadrado(value);
    return alert(area);
}

function calcularPerimetroTriangulo(){
    const inputTriangulo1 = document.getElementById("inputTriangulo1");
    const lado1 = Number(inputTriangulo1.value);
    const inputTriangulo2 = document.getElementById("inputTriangulo2");
    const lado2 = Number(inputTriangulo2.value);
    const inputBase = document.getElementById("inputBase");
    const base = Number(inputBase.value);
    
    const perimetro = perimetroTriangulo(lado1,lado2,base);
    return alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputTriangulo1 = document.getElementById("inputTriangulo1");
    const lado1 = Number(inputTriangulo1.value);
    const inputTriangulo2 = document.getElementById("inputTriangulo2");
    const lado2 = Number(inputTriangulo2.value);
    const inputBase = document.getElementById("inputBase");
    const base = Number(inputBase.value);

   const area = (base * alturaTriangulo(lado1,lado2,base))/2;
   return alert(area);
}

function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("inputCirculo");
    const radio = Number(inputRadio.value);
    
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("inputCirculo");
    const radio = Number(inputRadio.value);

    const area = areaCirculo(radio);
    alert(area);
}
