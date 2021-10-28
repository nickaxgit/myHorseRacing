"use strict"

class Horse{

    element //This is the DIV (or image) for the horse
    x       //this is the X posiion of the horse  

    constructor(element,y,color){
        
        element.style.top = y + "px"      //Set the vertical position of this horses element
        element.style.backgroundColor=color  //sete the colour .. from the array of colours we created earlier                
        element.classList.add("horse")
        document.body.appendChild(element)       //The DIV element we created, MUST be added to the document
        
        this.element=element        
        this.x=0
        
    }

    move(){
        this.element.style.left=this.x +"px"    //set the horizonatal position
        this.x += Math.floor(Math.random()*10)  //moves 'this' horse some randome amount
    }

    checkForWin(){        
        if(this.x >=finish){
            alert(`$(colors[h]} horse wins`)
            resetRace();
        }            
    }

    reset(){
        this.x=0
    }

}

const numHorses = 5
let horses=[] //Horses 



let colors=["red","blue","orange","cyan","magneta","yellow","black","turqoise","grey","lilac","white"]

function startRace(){
    setInterval(moveHorses,50)
}

function setupHorses(){
    for(let h=0;h<numHorses;h++){
        horses.push (new Horse(document.createElement("div"), 50 + h*45,colors[h]))        
    }
}


const finish=500

function moveHorses(){
    for(let h=0;h<numHorses;h++){

        let horse=horses[h]        
        horse.move()
        horse.checkForWin()
    }
}



function resetRace(){
    for(let h=0;h<numHorses;h++){        
        horse[h].reset()
    }
}



setupHorses()  //Invoke setup horses











