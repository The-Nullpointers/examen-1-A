window.onload = function() {
    var section = document.querySelector('.animated-section');
    section.classList.add('animate');
}

function gotopage(x){
    if(x==1){
        window.location.href = "html.html";
    }
    if(x==2){
        window.location.href = "css.html";
    }
    if(x==3){
        window.location.href = "js.html";
    }
}