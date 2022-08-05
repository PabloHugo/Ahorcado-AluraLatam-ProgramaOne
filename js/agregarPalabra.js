   
function guardarYcomenzar(){

   var newWordInput = document.getElementById('inputText').value;
   
   wordList.push (newWordInput.toUpperCase());
 
   window.location.href = "gameSprint2.html";
    
}
/*

var newWordInput = document.querySelector("#idTextArea");
var saveButton = document.querySelector("#save");
var message = document.querySelector("#message");
saveButton.addEventListener("click", function(event){
    var total = newWordInput.value.length;
    var count = 0;
    for(var i=0; i < total; i++){
        if(validLetters.includes(newWordInput.value[i].toUpperCase())){
            console.log("Está en lista:" + newWordInput.value[i].toUpperCase());
            count += 1;
        }
        else{ 
            console.log("NO está:" + newWordInput.value[i].toUpperCase());
        };
    };

    if(count == total){
        console.log("TODOS VÁLIDOS");
        newWordStored = sessionStorage.setItem("key",newWordInput.value.toUpperCase());
        window.location.href = "game.html";
    }else{
        console.log("CONTIENE CARACTERES INVÁLIDOS");
        message.textContent = "EL TEXTO CONTIENE CARACTERES INVÁLIDOS";
    }

});*/
    
    
    
 