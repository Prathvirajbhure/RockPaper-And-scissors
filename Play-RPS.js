let score = 
        JSON.parse(localStorage.getItem('score')) ||
        {
          Wins:0,
          Losses:0,
          Ties:0
        }
      
     updateScoreElement();
      /*we can also use if(!score){...} as null is also a falsy value or 
      this 
      if(score === null){
        score={
          Wins:0,
          Losses:0,
          Ties:0
        }
      }*/
     


      function playGame(playerMove){
        const computerMove = pickcomputerMove();
      let result = '';


            if(playerMove === 'scissors'){
              if(computerMove === 'rock') { 
              result = 'You lose.';
            }else if (computerMove === 'paper'){
              result = 'You win.';
            } else if (computerMove === 'scissors'){
              result = 'Tie.'; 
            }  
            } 
            
            
            
            else if (playerMove === 'paper'
            ){
              
            if(computerMove === 'rock') { 
              result = 'You win.';
            }else if (computerMove === 'paper'){
              result = 'Tie.';
            } else if (computerMove === 'scissors'){
              result = 'You lose.'; 
            }
            } 
            
            
            
            else if(playerMove === 'rock'){
              
            if(computerMove === 'rock') { 
              result = 'Tie.';
            }else if (computerMove === 'paper'){
              result = 'You lose.';
            } else if (computerMove === 'scissors'){
              result = 'You win.'; 
            }
            }
     

            if(result==='You win.'){
              score.Wins += 1;
            }else if (result==='You lose.'){
              score.Losses += 1;
            }else if(result==='Tie.'){
              score.Ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));

            document.querySelector('.js-result').innerHTML=`${result}`;
            
            document.querySelector('.js-moves').innerHTML=`You <img src="icons/${playerMove}-emoji.png" class="icon"> , Computer  <img src="icons/${computerMove}-emoji.png" class="icon">`;

            updateScoreElement();
    }
      
      function updateScoreElement(){
        document.querySelector('.js-score').innerHTML =`Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}.`;

      }
    
      function pickcomputerMove(){ 
        const randomNumber = Math.random();
       let computerMove = '';
        if (randomNumber >= 0 && randomNumber < 1/3)
       {computerMove ='rock';}  
        else if (randomNumber >= 1/3 && randomNumber < 2/3){
         computerMove ='paper'; } 
          else if (randomNumber >= 2/3 && randomNumber < 1 ) {
          computerMove = 'scissors';
            }
         return computerMove;    
      }
