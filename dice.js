var scores,roundscore,activeplayer=0;

init();

document.querySelector('.btn-roll').addEventListener('click',function(){
var x;
var dice = Math.floor(Math.random()*6) + 1;
var dicedom  = document.querySelector('.dice');
dicedom.src = 'dice-' + dice + '.png';

if(dice !== 1)
{
    roundscore += dice;
    document.querySelector('#current-'+activeplayer).textContent = roundscore; 
}
else if(x==dice && dice==6)
{
    document.querySelector('#name-' + abs(activeplayer-1)).textContent = 'WINNER';
    document.querySelector('#name-' + abs(activeplayer-1)).classList.add('winner'); 
}
else
{
    nextplayer();   
}
x = dice;
});


document.querySelector('.btn-hold').addEventListener('click',function(){
    // add current score to global score
    scores[activeplayer] += roundscore;
    
    //update UI
    document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer];

    // check if player won the games

    if(scores[activeplayer]>20)
    {
       document.querySelector('#name-' + activeplayer).textContent = 'WINNER'; 
       document.querySelector('.dice').style.display = 'none';
    
       document.querySelector('.player-'+ activeplayer + '-panel').classList.add('winner');
       document.querySelector('.player-'+ activeplayer + '-panel').classList.remove('active');
    }
    else
    {
        nextplayer();
    }


});

function nextplayer()
{
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    roundscore = 0;

    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    //toggle can be also used to switch classes
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

}

document.querySelector('.btn-new').addEventListener('click',init);
    

function init(){
    
scores = [0,0];
roundscore = 0;
//activeplayer = 0;

//document.querySelector('#current-'+activeplayer).textContent = dice;
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('#name-0').textContent = 'player 1';
document.querySelector('#name-1').textContent = 'player 2';
document.querySelector('.dice').style.display = 'block';
document.querySelector('.player-'+ activeplayer + '-panel').classList.remove('winner');
document.querySelector('.player-' + activeplayer + '-panel').classList.add('active');

}









