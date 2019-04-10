
//Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

const firstSection = document.querySelector(".article__header");

firstSection.textContent = "Welcome to the Jason blog";

//Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.


var elems = document.querySelectorAll(".article__header");
var index=0; length = elems.length;
for ( ; index<length; index++){
    elems[index].classList = "article__header !important";
}


//Obtain a reference the element with a class of dashed and remove it.

var dashed = document.querySelectorAll(".dashed");
dashed[0].parentNode.removeChild(dashed[0]);


//Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

const artFooter = document.querySelector(".article__footer");
artFooter.classList.add("goldenrod");
