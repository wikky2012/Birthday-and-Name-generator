var maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
var femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
    

function calculate(){
    var date=parseInt(document.getElementById('date').value);
    var month=parseInt(document.getElementById('month').value);
    var year=document.getElementById('year').value;
    var gender=document.getElementsByName('gender').value;
    if(date<1 || date>31){
       alert('invalid date');
       return;
    }
    
    if(month<1 || month>12){
        alert('invalid Month');
        return;
     }
    
     if(year<1 || year>2020){
        alert('invalid year');
        return;
     }
    
     var cc = parseInt(year.slice(0,2));
     var yy =parseInt(year.slice(2,4));
     var d;
     d = (( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + date ) % 7).toFixed(); 
    
     
     if(parseInt(d)===parseInt(0)){
         alert('You were born in Sunday');
     }
     else if(parseInt(d)===parseInt(1)){
        alert('You were born in Monday');
     }
     else if(parseInt(d)===parseInt(2)){
        alert('You were born in Tuesday');
     }
     else if(parseInt(d)===parseInt(3)){
        alert('You were born in Wednesday');
     }
     else if(parseInt(d)===parseInt(4)){
        alert(maleNames[0]);
     }
     else if(parseInt(d)===parseInt(5)){
        alert('You were born in Friday');
     }
     else if(parseInt(d)===parseInt(6)){
        alert('You were born in Saturday');
     }
     else{
         alert('Invalid');
     }
    
   
    if(gender==='male'){
        alert('male');
    }
    else if(gender==='female'){
        alert('female');
    }
    else if(gender=='other'){
        alert('Double Gender');
    }
    else{
        alert("Please provide the gender");
    }
}