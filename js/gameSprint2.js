var screen = document.querySelector("canvas");
var pencil = screen.getContext("2d");

drawBase();

if(sessionStorage.getItem("key") != null){
    wordList.push(sessionStorage.getItem("key"));
}

var letters = document.querySelector("#letters");     
var dashes = document.querySelector("#dashes");        
var rndWord = wordList[Math.floor(Math.random() * wordList.length)]; 
var theWordList = [];   
for(i=0; i<rndWord.length;i++){
    letters.innerHTML += `<span class="invisible trud">${rndWord[i]}</span>`;
    dashes.innerHTML += `<span class="trud line"></span>`;
    theWordList.push(rndWord[i]);        
};

var errors = document.querySelector("#lettersError");
document.addEventListener("keydown", function(event) { 
    var pressedLetter = event;  
    valid(pressedLetter.key.toUpperCase());         
});

function valid(letter){                 
    if(validLetters.includes(letter)){      
        letterInWord(letter);                   
    };
};

var invisibles = document.querySelectorAll(".invisible");   
var listErrors = [];   
var contadorErrors = 0;   
var winner = document.querySelector("#winner");
var winnerBlock = false;     

function letterInWord(letter){   
    if(theWordList.includes(letter) && !loserBlock){  
        for(var j=0; j<invisibles.length; j++){  
            if(letter == invisibles[j].textContent){      
                invisibles[j].classList.remove("invisible");     
                invisibles = document.querySelectorAll(".invisible");   
                if(invisibles.length == 0){     
                    console.log("ADIVINASTE!");
                    winner.classList.remove("hidden");
                    winnerBlock = true;        
                };
            };
        };
    }else{    
        if(listErrors.includes(letter) ){   
            
        }else{   

            if(!winnerBlock){   
                listErrors.push(letter);
                contadorErrors++;
                draw(contadorErrors);
                if(contadorErrors < 8){
                    errors.innerHTML += letter + " ";              
                };
            };

        };
    };
};

var newGame = document.querySelector("#newGame");
newGame.addEventListener("click", function(){     
    window.location.reload();          
});

var loser = document.querySelector("#loser");
var loserBlock = false;   
function draw(contadorErrors){    
    if(contadorErrors == 1){
        pencil.fillStyle = "blue";
        pencil.beginPath();
        pencil.arc(170,111,22,0,2*3.1416);
        pencil.stroke();       
    }
    else if(contadorErrors == 2){
        pencil.fillStyle = "blue";
        pencil.beginPath();
        pencil.moveTo(170,133);
        pencil.lineTo(170,153);
        pencil.stroke();        
    }
    else if(contadorErrors == 3){
        pencil.fillStyle = "blue";
        pencil.beginPath();
        pencil.moveTo(170,153);
        pencil.lineTo(145,193);
        pencil.stroke();        
    }
    else if(contadorErrors == 4){
        pencil.fillStyle = "blue";
        pencil.beginPath();
        pencil.moveTo(170,153);
        pencil.lineTo(195,193);
        pencil.stroke();        
    }
    else if(contadorErrors == 5){
        pencil.fillStyle = "blue";
        pencil.beginPath();
        pencil.moveTo(170,153);
        pencil.lineTo(170,240);
        pencil.stroke();        
    }
    else if(contadorErrors == 6){
        pencil.fillStyle = "blue";
        pencil.beginPath();
        pencil.moveTo(170,240);
        pencil.lineTo(145,290);
        pencil.stroke();        
    }
    else if(contadorErrors == 7){
        pencil.fillStyle = "blue";
        pencil.beginPath();
        pencil.moveTo(170,240);
        pencil.lineTo(195,290);
        pencil.stroke();         
        console.log("Perdiste!"); 
        loser.classList.remove("hidden");
        loserBlock = true;      
    }
};

function drawBase(){
    pencil.fillStyle = "darkblue";
    pencil.lineWidth = 3;       

    pencil.beginPath();
    pencil.moveTo(60,50);
    pencil.lineTo(60,320);
    pencil.stroke();      

    pencil.beginPath();
    pencil.moveTo(30,320);
    pencil.lineTo(270,320);
    pencil.stroke();     

    pencil.beginPath();
    pencil.moveTo(60,50);
    pencil.lineTo(170,50);
    pencil.stroke();        

    pencil.beginPath();
    pencil.moveTo(170,50);
    pencil.lineTo(170,90);
    pencil.stroke();      
};