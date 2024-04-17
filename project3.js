

window.onscroll=()=>{
    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');

    }
   
if(window.scrollY>1200){
    document.querySelector('.header .header-2').classList.add('bg');
}
}
window.onload=()=>{
    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');

    }

}

// form login



var user_login=document.querySelector('#login-btn');
user_login.addEventListener('click',()=>{
    document.querySelector('.login-form-container').classList.add('click');
})

var remove_bar=document.querySelector('.cross-bar');
remove_bar.onclick=()=>{
    document.querySelector('.login-form-container').classList.remove('click');
}
















