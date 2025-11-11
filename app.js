let boxes = document.querySelectorAll('.box') ;// Accessing all the boxes
let resetBox = document.querySelector('#reset-btn');
let newGame = document.querySelector('#newgame');
let congratsMsg = document.querySelector('.para');

let turnO = true ; //
let winPattern = [[0,1,2],[3,4,5,],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,6],[6,4,2]] ;

 boxes.forEach ((box) =>{
    box.addEventListener('click', ()=>{
        console.log ('Button is clicked');
        if(turnO){
            box.innerText = "O"
            turnO = false;

        }
        else{
            box.innerText = "X"
            turnO = true;
        }
box.disabled = true;

checkWinner();
    });
});

const disabledBoxes =()=>{
    for (let box of boxes){
        box.disabled= true;
    }}

const EnableBoxes =()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}


 

const showWinner = (winner)=>{   
congratsMsg.innerText = `Congrats Player ${winner} you are winner !!`;
congratsMsg.classList.remove("hide");
disabledBoxes();

}



    const checkWinner = ()=>{
        for (let pattern of winPattern){

           
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!= "" && pos2!="" &&pos3!=""){
            if(
                pos1==pos2 && pos2==pos3
            ){
                console.log('Winner',pos1);
                showWinner(pos1);
            }
        }
    }
}
const resetgame = ()=> {
    turnO = true;
    EnableBoxes();
    congratsMsg.classList.add('hide')

}

resetBox.addEventListener('click',resetgame);


 