var maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
var femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

function calculate(){
    var date=parseInt(document.getElementById('date').value);
    var month=parseInt(document.getElementById('month').value);
    var year=parseInt(document.getElementById('year').value);
    if(date<1 || date>31){
       alert('invalid date');
    }
    if(month<1 || month>12){
        alert('invalid Month');
     }
     if(year<1 || year>2020){
        alert('invalid year');
     }
    
    

}