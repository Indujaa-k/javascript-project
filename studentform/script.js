const arr = JSON.parse(localStorage.getItem('students')) || [];
   
    function on_click(){
      let  whole_operation=` <table border="1" cellpadding="8" >`;
      whole_operation+=`<tr>
        <th>Name</th>
        <th>Age</th>
        <th>Course</th>
        <th>Gender</th>
        <th>Email</th>
        <th>Action</th>
      </tr>`
      for(let i=0;i<arr.length;i++){
        index=arr[i];
        name=index.name;
        age=index.age;
        course=index.course;
        gender=index.gender;
        email=index.email;
        
    whole_operation+= `
      <tr>
        <td class="nameing">
         ${name}
        </td>
        <td class="ageing">
         ${age}
        </td>
        <td class="courseing">
          ${course}
        </td>
        <td class="gendering">
          ${gender}
        </td>
        <td class="emailing">
           ${email}
        </td>
        <td class="actioning">
         <button class="delete" onclick="
          deleteEntry(${i});
        ">delete</button>
        </td>
      </tr>`;
      }
      whole_operation+=`</table>`
      document.querySelector('.table_display').innerHTML= whole_operation; 
     
    }
  
    function object_display(){
     const name=document.querySelector('.name_text');
     const age=document.querySelector('.age_text');
     const gender=document.querySelector('input[name="gender"]:checked');
     const course = document.querySelector('.course_select').value;
     const email=document.querySelector('.email_text');
    
 
     obj={
      name:name.value,
      age:age.value,
      gender:gender.value,
      course,
      email:email.value,
     };
     arr.push(obj);

     name.value='';
     age.value='';
     if (gender) gender.checked = false;
     document.querySelector('.course_select').selectedIndex = 0;
     course.value='';
     email.value='';
     on_click();
    }
    function deleteEntry(index) {
  arr.splice(index, 1);
  localStorage.setItem('students', JSON.stringify(arr));
  on_click();
    }