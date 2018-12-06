const box = document.getElementById('box')

box.addEventListener("mouseover", (e) => e.target.style.backgroundColor = "Blue")
box.addEventListener("mousedown", (e) => e.target.style.backgroundColor = "Red")
box.addEventListener("mouseup", (e) => e.target.style.backgroundColor = "Yellow")
box.addEventListener("dblclick", (e) => e.target.style.backgroundColor = "Green")
box.addEventListener("scroll", (e) => e.target.style.backgroundColor = "Orange")

window.addEventListener("keydown", function (e) {

    if (e.keyCode === 82) {
        box.style.backgroundColor = "Red";
    }
    if (e.keyCode === 66) {
        box.style.backgroundColor = "Blue";
    }
    if (e.keyCode === 89) {
        box.style.backgroundColor = "Yellow";
    }
    if (e.keyCode === 71) {
        box.style.backgroundColor = "Green";
    }
    if (e.keyCode === 79) {
        box.style.backgroundColor = "Orange";
    }

})