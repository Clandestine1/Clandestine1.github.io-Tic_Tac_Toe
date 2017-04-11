console.log('main.js')
// turn tracks every turn, board track the spaces on the game board and endGame 
// determines when the game ends


let player = 'X';
let player2= 'O';

let square1 = document.querySelector('#one');
let square2 = document.querySelector('#two');
let square3 = document.querySelector('#three');
let square4 = document.querySelector('#four');
let square5 = document.querySelector('#five');
let square6 = document.querySelector('#six');
let square7 = document.querySelector('#seven');
let square8 = document.querySelector('#eight');
let square9 = document.querySelector('#nine');


square1.addEventListener('click', function(){
	if (player === 'X') {
	square1.innerHTML = player;
	player = 'O'; 
}
    else if(player === 'O'){
    	square1.innerHTML = player;
    	player = 'X';
    }
});

square2.addEventListener('click', function(){
	if (player === 'X') {
	square2.innerHTML = player;
	player = 'O'; 
}
    else if(player === 'O'){
    	square2.innerHTML = player;
    	player = 'X';
    }
});

square3.addEventListener('click', function(){
	if (player === 'X') {
	square3.innerHTML = player;
	player = 'O'; 
}
    else if(player === 'O'){
    	square3.innerHTML = player;
    	player = 'X';
    }
});

square4.addEventListener('click', function(){
	if (player === 'X') {
	square4.innerHTML = player;
	player = 'O'; 
}
    else if(player === 'O'){
    	square4.innerHTML = player;
    	player = 'X';
    }
});

square5.addEventListener('click', function(){
	if (player === 'X') {
	square5.innerHTML = player;
	player = 'O'; 
}
    else if(player === 'O'){
    	square5.innerHTML = player;
    	player = 'X';
    }
});

square6.addEventListener('click', function(){
	if (player === 'X') {
	square6.innerHTML = player;
	player = 'O'; 
}
    else if(player === 'O'){
    	square6.innerHTML = player;
    	player = 'X';
    }
});

square7.addEventListener('click', function(){
	if (player === 'X') {
	square7.innerHTML = player;
	player = 'O'; 
}
    else if(player === 'O'){
    	square7.innerHTML = player;
    	player = 'X';
    }
});

square8.addEventListener('click', function(){
	if (player === 'X') {
	square8.innerHTML = player;
	player = 'O'; 
}
    else if(player === 'O'){
    	square8.innerHTML = player;
    	player = 'X';
    }
});

square9.addEventListener('click', function(){
	if (player === 'X') {
	square9.innerHTML = player;
	player = 'O'; 
}
    else if(player === 'O'){
    	square9.innerHTML = player;
    	player = 'X';
    }
});


if(square1.innerHTML === 'X' && square2.innerHTML === 'X' && square3.innerHTML === 'X'){
	alert('X wins');
}


//Make if else statement that sets the board with var 'X' on even turns and var 'O' on odd turns.
//Make win condition three like variables in a row
//Make game over at turn 9 in a draw if win condition hasn't been met