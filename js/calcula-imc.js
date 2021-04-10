var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
//seleciona todos os pacientes

// Quando selecionamos um elemento com as funções de 
//querySelector, elas nos devolvem um objeto que tem 
//algumas propriedades especiais, que falam sobre as 
//características do HTML selecionado. Uma dessas 
//propriedades é a .classList, que como o nome indica
// nos mostras classes que aquele HTML tem.

for(var i = 0; i < pacientes.length ; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc"); 
    //altera o valor do IMC

    var pesoEhValido = validaPeso(peso); // true or false
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido"
        paciente.style.backgroundColor = "lightcoral";
    }

    if (!alturaEhValida) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida"
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) { 
    //passa os parametro e só calcula se estiver ok
        
        var imc = calculaImc(peso, altura);  // calculo IMC
        tdImc.textContent = imc; 
    // atualiza o valor do IMC que foi calculado na var imc
    }

}

function validaPeso(peso){
    if( peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }    
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.0 ){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura) {
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

