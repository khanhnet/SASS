new WOW().init();
//slide
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
    var slideContents= document.getElementsByClassName("slide--none");
    if (n > slideContents.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slideContents.length}
            for (i = 0; i < slideContents.length; i++) {
                slideContents[i].style.display = "none";

                slideContents[i].className = slideContents[i].className.replace(" fade", "");
            }
            slideContents[slideIndex-1].className += " fade";
            slideContents[slideIndex-1].style.display = "flex";

        }