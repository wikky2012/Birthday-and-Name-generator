var maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
var femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

function calculate(){
    event.preventDefault();
    var date = parseInt(document.getElementById('date').value);
    var month = parseInt(document.getElementById('month').value);
    var year = document.getElementById('year').value;
    var gender = document.getElementById('gender').value;

    if(date<1 || date>31){
      document.getElementById('output').innerHTML=('Invalid date');
       return;
    }
    
    if(month<1 || month>12){
      document.getElementById('output').innerHTML=('Invalid Month');
        return;
     }         
     if(parseInt(year)<1 || parseInt(year)>2020 ){
      document.getElementById('output').innerHTML=('Invalid year');
      return;
     }

     var cc = parseInt(year.slice(0,2));
     var yy = parseInt(year.slice(2,4));
     var d;
     d = Math.floor((( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + date ) % 7));
     
     if(parseInt(d) === parseInt(0) && (gender==="male")){
      document.getElementById('output').innerHTML=('You were born on Sunday and your Akan name is: '+maleNames[0]);
  }
  else if(parseInt(d) === parseInt(1) && (gender==="male")){
   document.getElementById('output').innerHTML=('You were born on Monday and your Akan name is: '+maleNames[1]);
  }
  else if(parseInt(d) === parseInt(2) && (gender==="male")){
   document.getElementById('output').innerHTML=('You were  born on Tuesday and your  Akan name is: '+maleNames[2]);
  }
  else if(parseInt(d) === parseInt(3) && (gender==="male")){
   document.getElementById('output').innerHTML=('You were  born on Wednesday and your  Akan name is: '+maleNames[3]);
  }
  else if(parseInt(d) === parseInt(4) && (gender==="male")){
   
     document.getElementById('output').innerHTML='You were  born on Thursday and your Akan name is: '+maleNames[4];
  }
  else if(parseInt(d) === parseInt(5) && (gender==="male")){
   document.getElementById('output').innerHTML=('You were  born on Friday and your  Akan name is: '+maleNames[5]);
  }
  else if(parseInt(d) === parseInt(6) && (gender==="male")){
   document.getElementById('output').innerHTML=('You were  born on Saturday and your  Akan name is: '+maleNames[6]);
  }

      if(parseInt(d) === parseInt(0) && (gender==="female")){
         document.getElementById('output').innerHTML=('You were born on Sunday and your Akan name is: '+femaleNames[0]);
     }
     else if(parseInt(d) === parseInt(1) && (gender==="female")){
      document.getElementById('output').innerHTML=('You were born on Monday and your Akan name is: '+femaleNames[1]);
     }
     else if(parseInt(d) === parseInt(2) && (gender==="female")){
      document.getElementById('output').innerHTML=('You were  born on Tuesday and your  Akan name is: '+femaleNames[2]);
     }
     else if(parseInt(d) === parseInt(3) && (gender==="female")){
      document.getElementById('output').innerHTML=('You were  born on Wednesday and your  Akan name is: '+femaleNames[3]);
     }
     else if(parseInt(d) === parseInt(4) && (gender==="female")){
      document.getElementById('output').innerHTML=('You were  born on Thursday and your Akan name is: '+femaleNames[4]);
     }
     else if(parseInt(d) === parseInt(5) && (gender==="female")){
      document.getElementById('output').innerHTML=('You were  born on Friday and your  Akan name is: '+femaleNames[5]);
     }
     else if(parseInt(d) === parseInt(6) && (gender==="female")){
      document.getElementById('output').innerHTML=('You were  born on Saturday and your  Akan name is: '+femaleNames[6]);
     }
     else{
         return false;
  }

  
}