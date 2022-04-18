function checkWin() {
    var x = document.getElementById("mainNav"); // assign the main nav bar the variable name x
    
    if (x.className === "main-nav") {  // if the nav bar is the default, change it to mobile version
        x.className += " responsive";
    } else {
        x.className = "main-nav";
         // otherwise set it back to default
    }
}