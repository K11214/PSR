let user_score=0;
let AI_score=0;
// const  = document.getElementById('')
// const  = document.querySelector("")
const user_score_span= document.getElementById("user_score")
const AI_score_span = document.getElementById("AI_score")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const  scissors= document.getElementById("scissors")
const W_L = document.getElementById("W_L")

const score_board = document.querySelector(".score_board")
const result_D= document.querySelector(".result_D")


function letAIChoice(){
	const choices=['rock','paper','scissors'];
	const Num=Math.floor(Math.random()*choices.length);
	return choices[Num];
}

function main(){
		rock.addEventListener('click',()=>game("rock"));
		paper.addEventListener('click',()=>game("paper"));
		scissors.addEventListener('click',()=>game("scissors"));
}
main();
function game(userChoice){
	const AIChoice=letAIChoice();
	switch (userChoice+AIChoice){
		case"rockscissors":
		case"scissorspaper ":
		case"paperrock":
		win(userChoice, AIChoice);
		break;

		case"rockpaper":
		case"paperscissors":
		case"scissorsrock":	
		lose(userChoice, AIChoice);
		break;

		case"rockrock":
		case"paperpaper":
		case"scissorsscissors":
		draw(userChoice, AIChoice);
		break;

	}
}
game();


function win(userChoice, AIChoice){
	user_score++;
	user_score_span.innerHTML=user_score;
	document.getElementById(AIChoice).classList.add('ChangeBgc');
	setTimeout(function(){document.getElementById(AIChoice).classList.remove('ChangeBgc')},1000);
	AI_score_span.innerHTML=AI_score;
	result_D.innerHTML=`${userChoice} beats ${AIChoice}`;
	W_L.innerHTML="You Win!";
}

function lose(userChoice, AIChoice){
	AI_score++;
	user_score_span.innerHTML=user_score;
	document.getElementById(AIChoice).classList.add('ChangeBgc');
	setTimeout(function(){document.getElementById(AIChoice).classList.remove('ChangeBgc')},1000);
	AI_score_span.innerHTML=AI_score;
	result_D.innerHTML=`${userChoice} loses ${AIChoice}`;
	W_L.innerHTML="You Lose!";
}

function draw(userChoice, AIChoice){
	document.getElementById(AIChoice).classList.add('ChangeBgc');
	setTimeout(function(){document.getElementById(AIChoice).classList.remove('ChangeBgc')},1000);
	result_D.innerHTML=`${userChoice} equals ${AIChoice}`;
	W_L.innerHTML="It's a Draw!";
}

