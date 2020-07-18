var maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
var femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
    

function calculate(){
    var date=parseInt(document.getElementById('date').value);
    var month=parseInt(document.getElementById('month').value);
    var year=document.getElementById('year').value;
    
    if(date<1 || date>31){
       alert('invalid date');
    }
    if(month<1 || month>12){
        alert('invalid Month');
     }
     if(year<1 || year>2020){
        alert('invalid year');
     }
     var cc = parseInt(year.slice(0,2));
     var yy =parseInt(year.slice(2,4));
     var d;
     d = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + date ) % 7;
     alert(d.toFixed());

     
}