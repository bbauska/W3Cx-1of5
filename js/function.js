/* Called from index.html within bbauska/w3cx-1of5.bauska.org/main.  Playing and learning JS. */
/*--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--*/
/*--~~~~~~~~~~~~~~~~~~~~~~~~~~ script function: scrollFunction() ~~~~~~~~~~~~~~~~~~~~~~~~~~~--*/
// Get the button.
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

// When the user scrolls down 10px from the top of the document, display the "go to" (myBtn) button.
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the table of contents near top of document.
  function topFunction() {
    document.getElementById('table-of-contents').scrollIntoView();
  }
