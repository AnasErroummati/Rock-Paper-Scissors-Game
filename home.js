
//The Operations Dictionary is used to determine what sign beats the other, for example the rock beats the scissors so Operations[rock][scissors] is 1.

Operations={
    "rock":{"scissors":1,"rock":0,"paper":-1},
    "scissors":{"scissors":0,"rock":-1,"paper":1},
    "paper":{"scissors":-1,"rock":1,"paper":0},
}

//Sources Dictionary is helping to restore the images links.

Sources={
    "rock":"https://i.redd.it/cn7w41ixjj041.jpg",
    "scissors":"data:image/jpeg;base64,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",
    "paper":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB7LK99bI-9U__1MHyRL6TRtZQ2pBLsKiGUA&usqp=CAU",
}

//choices array contains possible choices of the game. 

choices= ["rock","paper","scissors"];

// This image is the image of the user choice for example is the user chose a rock this image will contain the rock image link.

let Uimg= document.createElement("img");

// This image is the image of the Machine choice.

let Mimg= document.createElement("img");

// This is the text that will be displayed to the user, if the user win the text will be "You Win".

let txt= document.createElement("h1");

// This flag is for preventing the user from creating an action by cliking on the "Make Your Choice" button before he chose a sign. 

let flag;

// UserChoice function takes the User Choice. The 'ch' variable is the User Choice Object chosen by the user.

function UserChoice(ch){

    Initialization(); // line 50
    Uimg.src=Sources[ch.id];
    DefineWinner(ch);// line 77

}

// Initialization function is Used to remove all the images displayed (rock,paper,scissors images).

function Initialization(){

    let ImgArr=document.querySelector(".s-container").querySelectorAll("img, h1");
    for(i=0;i<ImgArr.length;i++){
        ImgArr[i].remove();
    }

}

// RandomChoice function is used to choose a random choice either rock,paper or scissor. This random Choice will the Machine Choice.

function RandomChoice(){

    return Math.floor(Math.random()*3);

}

// MachineChoice returns the choice of the machine using the RandomChoice function above.

function MachineChoice(){

    return choices[RandomChoice()];

}

// DefineWinner defines who is the Winner between the User and the Machine, it also displays the Wining or losing text and displays the images of the user and machine choice.

function DefineWinner(ch){

    MChoice=MachineChoice();
    Mimg.src=Sources[MChoice];
    if(Operations[ch.id][MChoice] > 0){
            txt.textContent="You win";
            txt.style.color="green";
    } else if(Operations[ch.id][MChoice] < 0){
        txt.textContent="You Lost";
        txt.style.color="red";
    }else{
        txt.textContent="Equality";
         txt.style.color="blue";
    }
    document.querySelector(".s-container").appendChild(Uimg);
    document.querySelector(".s-container").appendChild(txt);
    document.querySelector(".s-container").appendChild(Mimg);
    document.querySelector("#btn").textContent="Click Here to Play Again";
    flag=1; // This flag tells that the user has made a choice and the battle is over.

}

// The Reset function Brings the page to its initial state and look.

function Reset(){

    if(flag==1){

        let R= document.createElement("img");
        let P= document.createElement("img");
        let S= document.createElement("img");
        Initialization();
        R.id="rock";
        R.src=Sources["rock"];
        P.id="paper";
        P.src=Sources["paper"];
        S.id="scissors";
        S.src=Sources["scissors"];
        document.querySelector(".s-container").appendChild(R);
        document.querySelector(".s-container").appendChild(P);
        document.querySelector(".s-container").appendChild(S);
        R.addEventListener("click",function(){ UserChoice(this);});
        P.addEventListener("click",function(){ UserChoice(this);});
        S.addEventListener("click",function(){ UserChoice(this);});
        document.querySelector("#btn").textContent="Make Your Choice";
        flag=0;// this flag tells that the User can play again.
    
    }
}