const starsEI=document.querySelectorAll(".fa-star");
const emojisEI=document.querySelectorAll(".far");
const colorsArray =["red","orange","lightblue","lightgreen","green"];
updateRating(0);

starsEI.forEach((starsEI,index)=>{
starsEI.addEventListener("click",()=>{
updateRating(index);


});


});

function updateRating(index){
starsEI.forEach((starsEI,idx)=>{
if(idx < index + 1){
starsEI.classList.add("active");


}

});
emojisEI.forEach((emojisEI)=>{
emojisEI.computedStyleMap.transform = `translateX(-${index * 68}px)`;
emojisEI.computedStyleMap.color =colorsArray[index];
});
}

