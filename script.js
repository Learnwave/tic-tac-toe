let boxes = document.querySelectorAll(".box");

let rstBtn = document.querySelector('.reset-btn')

let winnerPrint = document.querySelector('#msg');

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerHTML = "O";
            turnO = false;
        }else{
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
 const checkWinner = ()=>{
    for(pattern of winPatterns){
     let pos1 = boxes[pattern[0]].innerHTML
     let pos2 = boxes[pattern[1]].innerHTML
     let pos3 = boxes[pattern[2]].innerHTML
     if(pos1 != ""&& pos2 != "",pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            
        }
     }
    }
    
 }