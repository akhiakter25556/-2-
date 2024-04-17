var 
date=document.getElementById('date');
var 
btn=document.getElementById('calculate');
var 
result=document.getElementById('result');
btn.addEventListener('click',()=>{
var birthdate=new
 date(date.value);
var
y1=birthdate.getFullYear();
var m1=birthdate.getMonth()+1;
var today=new date();
var y2=today.getFullYear();
var m2=today.getFullYear()+1;
var y3=y2-y1;
if(m2>m1){
    var m3=m2-m1;
}else{
y3--;
m3=12+m2-m1;
}
result.innerHTML=`Your age is ${y3} 
years and ${m3} months`;


});






