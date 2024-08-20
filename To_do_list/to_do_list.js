const arr =JSON.parse(localStorage.getItem('arr'))||[];
     looplist();
 
     function looplist(){
      let totalvalue='';
      arr.forEach( function ( value1,index) {
        const name=value1.name;
        const date=value1.date;

        const html=`
         <div>${name} </div>
         <div> ${date}</div> 
         <button class='del' onclick=" 
         arr.splice(${index},1);
         looplist();
          "> Delete</button></div> `;
        totalvalue+=html;
      
    });
      console.log(totalvalue);
      document.querySelector('.list').innerHTML=totalvalue;
    }
    
  
     function todolist(){
      let button=document.querySelector('.text_box');
      let date=document.querySelector('.date');

      newobject={
       name:button.value,
       date:date.value
      };

      arr.push(newobject);
      
      button.value='';
      date.value='';
      looplist();
      storage();
      
     }
     function storage()
     {
      localStorage.setItem('arr',JSON.stringify(arr));
     }