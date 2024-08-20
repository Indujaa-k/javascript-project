let score= JSON.parse(localStorage.getItem('score' ))||{
  Win:0,
  Loose:0,
  Draw:0
   };
  scorerunner();
   /*if (!null){
    score={
    Win:0,
    Loose:0,
    Draw:0
   };}*/

   //Reset score function
   function scorerun(){
    score.Win = 0,
    score.Loose = 0;
    score.Draw = 0;   
    scorerunner();
    localStorage.removeItem('score'); 
   }

   //addevent listener for reset to display yes or no msg

   document.querySelector('.resetbutton').addEventListener('click',()=>{
    conformationbox();
   })

   function conformationbox(){
    document.querySelector('.reset_conformation').innerHTML=`<p>Are you sure you want to reset the score?
    <button class='yesbutton'>yes</button>
    <button class='nobutton'>no</button></p>`;
   
   document.querySelector('.yesbutton').addEventListener('click',() => {
    scorerun();
    hideconformation();
   });
   
   document.querySelector('.nobutton').addEventListener('click',() => {
    hideconformation();
   });


    }

    function hideconformation(){
      document.querySelector('.reset_conformation').innerHTML='';
    }

   //keydown for rock paper sccissor and reset
   document.body.addEventListener('keydown',(event)=>{
    if(event.key==='r'||event.key==='R'){
      rock_paper_scissor('rock')
    }

    else if(event.key==='p'||event.key==='P'){
      rock_paper_scissor('paper')
    }

    else if(event.key==='s'||event.key==='S'){
      rock_paper_scissor('scissor')
    }
    else if(event.key==='Backspace')
    {
      conformationbox();
    }
  });
   function scorerunner(){
        document.querySelector('.score_runner')
         .innerHTML=`Wins:${score.Win} Loose:${score.Loose} Draw:${score.Draw}`;
       
      }
   function rock_paper_scissor(userchoice)
   {
   random_num=Math.random();
   computer_choice='';
      if (random_num>=0 && random_num<1/3)
      {
          computer_choice = 'rock';
      }
      else if (random_num>=1/3 && random_num<2/3)
      {
          computer_choice= 'paper' ;
      }
      else if (random_num>=2/3 && random_num<=1)
      {
          computer_choice= 'scissor' ;
      }
    let result='';
     if (computer_choice===userchoice)
      {
        result='Draw';
      }
      else if (computer_choice==='rock' && userchoice==='paper')
      {
        result='You Win';
      }
      else if (computer_choice==='paper' && userchoice==='rock')
      {
        result='You Loose';
      }
      else if (computer_choice==='paper' && userchoice==='scissor')
      {
        result='You Win';
      }
      else if (computer_choice==='scissor' && userchoice==='paper')
      {
        result='You Loose';
      }
      else if (computer_choice==='scissor' && userchoice==='rock')
      {
        result='You Win';
      }
      else if (computer_choice==='rock' && userchoice==='scissor')
      {
        result='You Loose';
      }
  
      if (result==='You Win'){
        score.Win+=1;
      }
      else if (result==='You Loose'){
        score.Loose+=1;
      }
      else if (result==="Draw")
      {
        score.Draw+=1;
      }
      scorerunner();
      document.querySelector('.result_runner')
         .innerHTML=result;
      document.querySelector('.choice_runner')
       .innerHTML=` You
  <img src="${userchoice}.jpg" class="rock">
  <img src="${computer_choice}.jpg " class="rock">
  Computer`;
      
 localStorage.setItem('score',JSON.stringify(score));
     
    }