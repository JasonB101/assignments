const navButton = document.getElementById('nav-button')
const navMenu = document.getElementById('nav-menu')
const content = document.getElementById('content')
const navItems = document.getElementsByClassName('nav-bar')
navButton.addEventListener("click", (e) => {
    if (navMenu.style.width === "") {
        navMenu.style.width = "300px"
        // for (i = 0; i < navItems.length; i++){
        //     navItems[i].style.border = "1px solid black"
        // }
    }
    else {
        navMenu.style.width = ""
        // for (i = 0; i < navItems.length; i++){
        //     navItems[i].style.border = ""
        // }
    }
})
