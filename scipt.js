let boxb=document.querySelectorAll(".box");
let newgame=document.querySelector(".reset-btn");
let messcontainer=document.querySelector(".meg");
let mess=document.querySelector(".mesg")

const winconitain=[
    [0,1,2],
    [2,5,8],
    [6,4,2],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
];

const resetgame=()=>{
    turno=true;
    enableboxe();
    messcontainer.classList.add("hide");
}

let turno=true;
boxb.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("suraj");
        if(turno){
            turno=false;
            box.innerText = "O";
        }
        else{
            box.innerText = "X";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const disabledboxe=()=>{
    for(let box of boxb){
        box.disabled=true;
    }
}

const enableboxe=()=>{
    for(let box of boxb){
        box.disabled=false;
        box.innerText="";
    }
    
}

const showwinner = (winner)=>{
    mesg.innerText=`Congratulations Winner is ${winner}`;
    messcontainer.classList.remove("hide");
}

const checkwinner=()=>{
    for(let p of winconitain){
        let p1=boxb[p[0]].innerText;
        let p2=boxb[p[1]].innerText;
        let p3=boxb[p[2]].innerText;

        if(p1!="" && p2!="" && p3!=""){
            if(p1==p2 && p2==p3){
                console.log("winner",p1);
                showwinner(p1);
                disabledboxe();
            }
        }
    }
}

newgame.addEventListener("click",resetgame);