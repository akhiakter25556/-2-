var button=document.getElementById('btn');

var image=document.querySelector(`#scanimg`);

button.addEventListener('click',()=>{
var input=document.querySelector('#int');
image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;

input.value=""
});


