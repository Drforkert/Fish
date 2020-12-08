const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=> {
    var scroll_position = window.scrollY;
    if(scroll_position > 450){
        header.style.backgroundColor = "#29323c"
    }else{
        header.style.backgroundColor = "transparent"
    }
});



const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    if(this.value == "")
    parent.classList.add("focus");
}
function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "")
    parent.classList.remove("focus");
}

inputs.forEach((input => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
}));


