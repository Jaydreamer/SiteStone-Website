//scroll to top function
window.onload = function() {
 jQuery(function($) {
   var offset = 1200; // adjustable
   var duration = 500;
   $(window).scroll(function() {
     if ($(this).scrollTop() > offset) {
       $('.back-to-top').fadeIn(duration);
     }
     else {
       $('.back-to-top').fadeOut(duration);
     }
   });
   $('.back-to-top').unbind('click.smoothscroll').bind('click', function(e) {
     e.preventDefault();
     $('html, body').animate( { scrollTop: 0 }, duration);
     return false;
   })
 });
}
$(function scroll_up(){
      $("#includedContent").load("scroll_to_top.html");
    });

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
