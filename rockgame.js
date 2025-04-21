let user = 0;
let comp = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");
const gencomputerchoice = () =>{
    //rock,paper,scissor
    let options = ["rock","paper","scissor"];
    const random = Math.floor(Math.random()*3);
    return options[random]; 
};
const drawgame = ()=>{
    console.log("Game was draw.");
    msg.innerText = "Game was draw!";
    msg.style.backgroundColor = "#080b31";
};
const showwinner = (userwin)=>{
    if(userwin)
    {
        console.log("you win!");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
        user++;
        userscore.innerText = user;
    }
    else
    {
        console.log("you lose!");
        msg.style.backgroundColor = "red";
        msg.innerText = "You lose!";
        comp++;
        compscore.innerText = comp;
    }
};
const playgame = (userchoice)=>{
    console.log("User choice = ",userchoice);
    const compchoice = gencomputerchoice();
    console.log("comp choice = ", compchoice);

    if(userchoice==compchoice)
    {
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice==="rock"){
            userwin = compchoice==="paper" ? false:true;
        }
        else if(userchoice==="paper")
        {
            userwin = compchoice==="scissor" ? false:true;
        }
        else{
            userwin = compchoice==="rock" ? false:true;
        }
        showwinner(userwin);
    }
};
choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});