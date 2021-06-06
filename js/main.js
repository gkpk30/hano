// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.height = "65px";
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("header").style.height = "100px";
    // document.getElementById("logo").style.fontSize = "35px";
  }
}

function menuCloser(){
  var x;
  x = document.getElementById('nav-toggle');
  x.checked = false;
}

function menuOpen(){
 
}
//******************************************************************************* */
//change css style of "Get In Touch area" when "CONTACT" menu item is selected
const heading4 = document.querySelector(".info-area h4");
const contactInfo = document.querySelectorAll(".contact-info a");

function changeLinkStyle(item) {
  item.style.color = '#f3dcd0';
  item.style.fontSize = '20px'
  item.style.transition = 'all 2s ease-in';
}
function changeHeadingStyle(item) {
  item.style.color ='rgb(254 124 26)';
  item.style.fontSize = '40px';
  item.style.transition ='all 2s ease-in';
}

const microContact = () => {
 
    changeHeadingStyle(heading4);
    contactInfo.forEach(changeLinkStyle);
}



const contactLink = document.querySelector("#contact-link");
contactLink.addEventListener("click", function(){
  microContact();
})

//////////////////**************************** */