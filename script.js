
let mybutton = document.getElementById('fixedE');
let carD = document.getElementById('card');
let dropDown = document.querySelector('card-desc');


carD.addEventListener('mouseenter', e => {
  dropDown.style.opacity = "1";
  dropDown.style.height = "100%";

  carD.style.opacity = "1";
  carD.style.height = "100%";
  carD.style.border = '15px dotted orange';

});
function removeRelativePositioning(){
  carD.style.position ="none";
}

document.addEventListener('scroll', function(e) {
  // mybutton.style.display = "none";
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

});

function backToTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
