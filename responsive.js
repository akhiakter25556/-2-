//create question with hson formet

var question=[
    {
        ques:'What is Capital of Bangladesh?',

        answer:[
            {ans:'Dhaka',correct:true},
            {ans:'Islamabad',correct:false},
            {ans:'Moscow',correct:false},
            {ans:'new Delhi',correct:false}
        ]
    },
    {
        ques:'What is Capital of India?',

        answer:[
            {ans:'Dhaka',correct:false},
            {ans:'Islamabad',correct:false},
            {ans:'Moscow',correct:false},
            {ans:'new Delhi',correct:true}
        ]
    },
    {
        ques:'What is Capital of Pakistan?',

        answer:[
            {ans:'Dhaka',correct:false},
            {ans:'Islamabad',correct:true},
            {ans:'Moscow',correct:false},
            {ans:'new Delhi',correct:false}
        ]
    },
    {
        ques:'What is Capital of Russia?',

        answer:[
            {ans:'Dhaka',correct:false},
            {ans:'Islamabad',correct:false},
            {ans:'Moscow',correct:true},
            {ans:'new Delhi',correct:false}
        ]
    },
    {
        ques:'What is Capital of Canada?',

        answer:[
            {ans:'Ottawa',correct:true},
            {ans:'Islamabad',correct:false},
            {ans:'Moscow',correct:false},
            {ans:'new Delhi',correct:false}
        ]
    },
   
]

//initialization/define

var question_box=document.querySelector('.question_box h2');
var answer_box=document.querySelector('.answer_btn');
var next_btn=document.getElementById('next-btn');
let index=0;
let count=0;

//main question function
function quiz(){
    index=0;
    count=0;
    next_btn.innerHTML='next';
    questionShow();
}


// for showing question with dynamic create button
function questionShow(){

    remove()
    let presentQues=question[index];
    let questionNo=index+1;

    question_box.innerHTML=questionNo+')'+presentQues.ques;
    presentQues.answer.forEach((answer)=>{
        const button=document.createElement('button');
        button.innerHTML=answer.ans;
        button.classList.add('btn');
        console.log(button);
        answer_box.appendChild(button);
        
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        
        button.addEventListener('click',correctAns)

    })
}


//remove extra child from question box
function remove(){
    next_btn.style.display='none';
   while(answer_box.firstChild){
    answer_box.removeChild(answer_box.firstChild);
   }
}



//to show currect button
function correctAns(event){
var currentButton=event.target
var isCorrect=currentButton.dataset.correct==='true';
if(isCorrect){
 currentButton.style.backgroundColor='green';
 currentButton.style.color='white';
 count++;
}else{
    currentButton.style.backgroundColor='red';
}

Array.from(answer_box.children).forEach(button=>{
   
    button.disabled='true';
})

 next_btn.style.display='block';
}


next_btn.addEventListener('click',()=>{
    if(index<question.length){
        index++;
        if(index<question.length){
            questionShow();
        }else{
            question_box.innerHTML=`your corect answer is ${count}/${question.length}`;
            remove();
            next_btn.innerHTML='Try Again';
            next_btn.style.display='block'

        }
        
    }else{
        quiz();
    }
})


quiz();