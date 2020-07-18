var maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
var femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

function calculate(){
    var date = parseInt(document.getElementById('date').value);
    var month = parseInt(document.getElementById('month').value);
    var year = document.getElementById('year').value;
    var gender = document.getElementById('gender').value;
    if(date<01 || date>31){
       alert('invalid date');
       return;
    }
    
    if(month<01 || month>12){
        alert('nvalid Month');
        return;
     }         
    
     if(year<0001 || year>2020){
        alert('Invalid year');
        return false;
     }

     var cc = parseInt(year.slice(0,2));
     var yy = parseInt(year.slice(2,4));
     var d;
     d = (( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + date ) % 7).toFixed(); 
      
     
   //  if(gender === 'male'){
   //     return;
   //  }
   //  else if(gender === 'female'){
   //      return;
   //  }
   //  else if(gender === 'other'){
   //      alert('Double Gender');
   //  }
   //  else{
   //      alert('Please provide the gender');
   //   }

     if(parseInt(d) === parseInt(0) && (gender==="male")){
      alert('Your Akan name is: '+maleNames[0]);
  }
  else if(parseInt(d) === parseInt(1) && (gender==="male")){
     alert('Your Akan name is: '+maleNames[1]);
  }
  else if(parseInt(d) === parseInt(2) && (gender==="male")){
     alert('Your Akan name is: '+maleNames[2]);
  }
  else if(parseInt(d) === parseInt(3) && (gender==="male")){
     alert('Your Akan name is: '+maleNames[3]);
  }
  else if(parseInt(d) === parseInt(4) && (gender==="male")){
     alert('Your Akan name is: '+maleNames[4]);
  }
  else if(parseInt(d) === parseInt(5) && (gender==="male")){
     alert('Your Akan name is: '+maleNames[5]);
  }
  else if(parseInt(d) === parseInt(6) && (gender==="male")){
     alert('Your Akan name is: '+maleNames[6]);
  }
  else{
      alert('Invalid');

      if(parseInt(d) === parseInt(0) && (gender==="female")){
         alert('Your Akan name is: '+femaleNames[0]);
     }
     else if(parseInt(d) === parseInt(1) && (gender==="female")){
        alert('Your Akan name is: '+femaleNames[1]);
     }
     else if(parseInt(d) === parseInt(2) && (gender==="female")){
        alert('Your Akan name is: '+femaleNames[2]);
     }
     else if(parseInt(d) === parseInt(3) && (gender==="female")){
        alert('Your Akan name is: '+femaleNames[3]);
     }
     else if(parseInt(d) === parseInt(4) && (gender==="female")){
        alert('Your Akan name is: '+femaleNames[4]);
     }
     else if(parseInt(d) === parseInt(5) && (gender==="female")){
        alert('Your Akan name is: '+femaleNames[5]);
     }
     else if(parseInt(d) === parseInt(6) && (gender==="female")){
        alert('Your Akan name is: '+femaleNames[6]);
     }
     else{
         alert('Invalid');
  }

  }
}