var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeout");

    setTimeout(function(){
        event.target.parentNode.remove();
    },700);

});
//fadeOut = definirá a opacidade do elemento com 0, fazendo-o sumir
//target = Ele irá nos dizer quem foi clicado, quem foi o alvo
//this = se refere ao dono do evento, o event.target será quem sofreu propriamente o evento.
//parentNode = Para selecionarmos o pai de um elemento

    
// *** O mesmo código de forma mais detalhada 
    // var pacientes = document.querySelectorAll(".paciente");

    // var tabela = document.querySelector("table");

    // tabela.addEventListener("dblclick", function(event){
    //     var alvoEvento = event.target;
    //     var paiDoAlvo = alvoEvento.parentNode;  //TR = paciente = remover
    //     paiDoAlvo.remove();
        
    // });



