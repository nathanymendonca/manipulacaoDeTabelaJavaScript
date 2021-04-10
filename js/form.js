var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); 

    var form = document.querySelector("#form-adiciona");
    //monta o form

    var paciente = obtemPacienteDoFormulario(form);
    // EXTRAINDO INFORMAÇÕES DO PACIENTE DO FORM
           
     var erros = validaPaciente(paciente);
     console.log(erros);  
     if(erros.length > 0){
        exibeMensagensDeErro(erros);
         return;
        }

    adicionaPacienteNaTabela(paciente);
   
// **quando clilcar no botãoAdcionar ele vai pegar os valores
//do novo paciente e colocar na tabela
     
     form.reset(); 
     //limpa os campos depois que as informções foi para a tabela

     var mensagensErro = document.querySelector("#mensagens-erro");
     mensagensErro.innerHTML = ""
});


function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente); 
    // CRIA A TR E A TD PACIENTE
    var tabela = document.querySelector("#tabela-pacientes");
    // ADICIONAR PACIENTE NA TABELA
    tabela.appendChild(pacienteTr);
}


function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li); 
    // Passamos para ela uma função por parâmetro, e nessa função
    //  fazemos o que quisermos para cada item do array. 
    // O item do array é recebido por parâmetro na função interna

    });
}


function obtemPacienteDoFormulario(form){
    
    var paciente = {
        nome:form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    // variavel paciente tem varios objetos dentro dela 
    //(objeto = caracteristica)
    // quando declaramos um objeto no Javascript utilizamos
    // o sinal de : para separar propriedades e seus valores.
    return paciente;
};


function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
     //cria a tr

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "gordura-peso"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    //depois de criada a tr ele puxa as informações das classes filhas
    // da td com os seus valores

    return pacienteTr;
   
// Aqui, buscamos em paciente um elemento que tenha a 
//classe .info-peso e  .info-altura, usando o seletor de classe (.). 
//Isso vai nos retornar a <td> que contém estes dados do 
//paciente. Observe que este dado é salvo na variável tdPeso e tdAltura.

};

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}

function validaPaciente(paciente){
    
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("Campo nome vazio");
    }

    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido!");
    // se o if tiver apenas uma condição pode deixar direto
    //não precisa abrir e fechar {}

    if(!validaAltura(paciente.altura)) erros.push("Altura é inválida!");

    if(paciente.gordura.length == 0){
        erros.push("Campo gordura vazio");
    }

    if(paciente.peso.length == 0){
        erros.push("Campo peso vazio")
    }
    
    if(paciente.altura.length == 0){
        erros.push("Campo altura vazio")
    }

    return erros;    
}

 //**EVENTLISTENER */
//A vantagem do addEventListener é que podemos executar mais 
//de uma função para o mesmo evento

//No entanto, quando desejamos executar apenas uma única 
//função por evento, podemos escrever o código da seguinte
// forma usando um event shortcut

// <button id="botao">clique-me</button>
/* <script>

var botao = document.querySelector('#botao');

function botaoHandler() {

    alert('Botão clicado');
}

 function outroHandler() {

    alert('Botão clicado também!');
}


botao.onclick = botaoHandler;
</script>  */


// ***innerHTML
//Com a propriedade innerHTML, podemos obter o conteúdo HTML 
//(HTML interno) de um elemento.
//innerHTML é uma propriedade, não uma função, então ela recebe
// o novo conteúdo, ou seja, utilizamos um sinal de igual (=)
//quando utilizada para obter o HTML interno de um elemento, 
//o retorno da propriedade innerHTML será todo o conteúdo HTML,
// seja tags, atributos, classes, etc, no formato de uma String.
//podemos editar o conteúdo HTML (HTML interno) de um elemento.

//Ex:  Para modificar o HTML interno, Rafael deve alterar a 
//propriedade innerHTML na segunda linha, e removê-la da primeira:
// ANTES >> var nome = document.querySelector("#nome").innerHTML;
// nome = "Meu nome é Rafael";
// DEPOIS >> var nome = document.querySelector("#nome");
//nome.innerHTML = "Meu nome é Rafael";