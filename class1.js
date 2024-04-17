var button=document.getElementById('btn');
var result=document.getElementById('result');
button.addEventListener('click',()=>{
var input=parseint(document.getElementById('inputr').value);
var error=document.getElementById('error');
var random=Math.trunc(Math.random()*5)+1;
var error_status=false;
if (input=="||isNaN(input)||input<=0||input>=6)
{error.innerHTML='you give a wrong input';
}else{
var error_status=true;
error.innerHTML=";

}
if(error_status){
if(random===input){
result.innerHTML="your number <span>is not Mathch</span>With random number";
var audio=new Audionew('husn.mp3');
audio.play();


}else{
result.innerHTML="your number <span>is not Match<span> with random number";


}

}
});
