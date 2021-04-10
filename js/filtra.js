var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
     console.log(this.value);
     var pacientes = document.querySelectorAll(".paciente");
     
     if(this.value.length > 0){

     for( var i = 0; i< pacientes.length; i ++){
         var paciente = pacientes[i];
         var tdNome = paciente.querySelector(".info-nome");
         var nome = tdNome.textContent;
         var expressao = new RegExp(this.value, "i");
         if(!expressao.test(nome)){
             paciente.classList.add("invisivel");
         }else{
             paciente.classList.remove("invisivel");
         }
     }
  }else{
    for( var i = 0; i< pacientes.length; i ++){
        var paciente = pacientes[i];
        paciente.classList.remove("invisivel");
  } 
  }  
});

// A função addEventListener() recebe dois parâmetros,
// o nome do evento a ser escutado e uma função com a
//o que deve executar 

//new RegExp(..) >> O primeiro parâmetro é o padrão 
//(o texto da expressão regular, o que deve ser buscado)
// e o segundo parâmetro são uma ou mais flags 
//(representando como queremos que a expressão regular 
//busque).
//Por exemplo, podemos definir que não queremos que haja
// distinção entre letras maiúsculas e minúsculas, 
//através da flag i.