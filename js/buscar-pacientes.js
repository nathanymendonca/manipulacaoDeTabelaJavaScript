var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
          
        if(xhr.status ==200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
                
            });    
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
             
             erroAjax.classList.remove("invisivel");

        }



        
    });
       xhr.send();
});

//XMLHttpRequest >> responsável por fazer 
//requisições HTTP assíncronas com Javascript. Apesar 
//de ter o XML no nome hoje em dia este objeto pode 
//trafegar diversos outros tipos de dados além do XML

// open() >> serve para especificar o tipo de requisição 
//a ser feita, no caso, GET.
//Ex: com POST: xhr.open("POST","www.xyz.com.br/compras");

// apenas verificando se o endereço está correto se 
//existe e está fazendo as configurações da requisição

//send() >> para envio das requisições

//Para os dados serem exibidos, após o envio da requisição,
// devemos escutar um evento específico que é acionado 
//quando a requisição termina e a sua resposta é carregada.
// Ao escutarmos o evento, carregaremos a resposta da 
//requisição - que no caso, serão nossos dados. Esse 
//evento é o load, característico do XMLHttpRequest:

//E para acessarmos os dados da resposta, usaremos a 
//propriedade responseText do XMLHttpRequest. Para 
//testarmos, podemos guardá-la em uma variável, e depois
// imprimi-la no console do navegador:

// O formato de dados JSON
//Os dados possuem uma estrutura parecida com o objeto do 
//JavaScript porque eles estão no formato JSON (sigla de 
//JavaScript Object Notation), um formato de dados parecidos
// com os objetos do JavaScript que podemos transportar pela web.

//A semelhança é tanta que podemos facilmente converter JSON
// (o texto da resposta da requisição) em objetos do JavaScript
// com os quais estamos mais acostumados a utilizar, como array 
//ou mesmo uma string. Queremos que ele seja transformado em um 
//array de objetos, mais útil para o JS.

//Para conseguirmos transformar a resposta, que é um texto 
//(uma string), em um array de pacientes, usaremos um "transformador",
// mais precisamente um parseador de JSON para objetos do JavaScript.
// Para realizarmos esta tarefa usaremos o método parse().
// Assim, receberemos o texto em JSON, que depois será parseado.
// Em seguida, será retornado um objeto JavaScript. Como nossa 
//resposta se parece com um objeto, o método entenderá isso e nos
// retornará um array do objetos: