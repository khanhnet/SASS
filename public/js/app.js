var caretprev = document.getElementById("slider-prev");
var caretnext = document.getElementById("slider-next");
var slider = document.getElementsByClassName('floater-products-items');
var closebutton = document.getElementById('close-button');
var slideindex = 0;
var header = document.getElementById('hd');
var slidescount = slider.length;
console.log(slidescount);
for (i = 1; i < slidescount; i++) {
    slider[i].style.display = "none";
}

function nextSlide() {
    slideindex++;
    if (slideindex == slider.length) {
        slider[slideindex - 1].style.display = "none";
        slider[0].style.display = "flex";
        slideindex = 0;
        return;
    }
    slider[slideindex - 1].style.display = "none";
    slider[slideindex].style.display = "flex";
    console.log(slideindex);
}

function prevSlide() {
    if (slideindex == 0) {
        slider[slideindex].style.display = "none";
        slider[slider.length - 1].style.display = "flex";
        slideindex = slider.length - 1;
        return;
    }
    slideindex--;
    slider[slideindex + 1].style.display = "none";
    slider[slideindex].style.display = "flex";
}
//setInterval(nextSlide, 3000);
console.log(closebutton);
closebutton.addEventListener('click', function() {
    this.parentNode.parentNode.parentNode
        .removeChild(this.parentNode.parentNode);
    return false;
});
var menu = document.querySelector('#menu');
var main = document.querySelector('body');
var drawer = document.querySelector('.nav');

menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
});
main.addEventListener('click', function() {
    drawer.classList.remove('open');
});