/*
THE PIG GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/



var scores, activePlayer, roundScore, isPlaying , lastRoll, winningScore;




scores = [0, 0];
activePlayer = 0;
roundScore = 0;

isPlaying = true;


document.querySelector('.player-0-panel').classList.add('active');


document.querySelector('.dice1').style.display = "none";
document.querySelector('.dice2').style.display = 'none';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function(){

	if(isPlaying){


	// Roll the dice
	var dice1 = Math.floor(Math.random() * 6 ) + 1;
	var dice2 = Math.floor(Math.random() * 6 ) + 1;
	console.log(dice1, dice2)

	if(dice1 === 1 || dice2 === 1){
	nextPlayer();
	}


	// else{


	// 	if ( dice1 === 6 && lastRoll === 6 ) {
 //        //If consecutive 6's code goes here
 //        scores[activePlayer] = 0;
 //        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
 //        alert('Oops! You just rolled a six TWICE!');

 //        //Next Player turn
 //    	nextPlayer();

 //    	} 


    	else {
			//Roll the dice1 and count the round score
			roundScore = roundScore + dice1 + dice2;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;

			//Display the dice1
			document.querySelector('.dice1').style.display = 'block';
			document.querySelector('.dice2').style.display = 'block';

			document.querySelector('.dice1').src = "dice-" + dice1 + '.png';
			document.querySelector('.dice2').src = "dice-" + dice2 + '.png';

    	}
    	//Unfinished for both dice
    	lastRoll = dice1;

	
	}
}
	
)


document.querySelector('.btn-hold').addEventListener('click', function (){

	if(isPlaying){



	scores[activePlayer] += roundScore;
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];



	//This part of code take input from the user
	var input = document.querySelector('.final-score').value;
	if(input){

		winningScore =  input;
	}
	else{
		winningScore = 100;
	}




	if (scores[activePlayer] >= winningScore){

		document.querySelector('#name-' + activePlayer).textContent = 'winner!';
		document.querySelector('.dice1').style.display = 'none';
		document.querySelector('.dice2').style.display = 'none';

		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		isPlaying = false;
		}

	else {
	// Next Player
	nextPlayer();

	}


	}

})
document.querySelector('.btn-new').addEventListener('click', function(){
	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;
	isPlaying = true;



	document.querySelector('.dice1').style.display = 'none';
	document.querySelector('.dice2').style.display = 'none';

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';


	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';


	//Removing winner class from both side: because we don't know which one will stand
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');

	//Removing active class from both side: because we don't know which one will stand 
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');

	//Adding active for first one: to show default 
	document.querySelector('.player-0-panel').classList.add('active');


})


function nextPlayer(){
		activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
		roundScore = 0;
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		// DEFAULT FACE
		document.querySelector('.dice1').style.display = "none";
		document.querySelector('.dice2').style.display = 'none';
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

}











