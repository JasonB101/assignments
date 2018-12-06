var newHeader = document.createElement("div");
newHeader.className = "header"
var h3 = document.createElement("h3");
var myName = document.createElement("span");
myName.className = "name";
var myNameWrote = document.createElement("p");
h3.textContent = "Javascript Made This!!"
myName.textContent = "Jason"
myNameWrote.textContent = " wrote the Javascript"

newHeader.appendChild(h3)
myNameWrote.prepend(myName)
newHeader.appendChild(myNameWrote)
document.body.insertBefore(newHeader, document.body.firstChild)

//HEADER END----------------------



const clear = document.getElementById('clear-button');
const submit = document.getElementById('submit');
const messageBox = document.getElementById('messagebox');
const textBox = document.getElementById('textbox');
const leftDrop = document.getElementById('leftdrop');
const rightDrop = document.getElementById('rightdrop');
const messages = {
    left: [],
    right: [],
    colors: function() {
        var array = [];
            array.push(leftdrop.value);
            array.push(rightdrop.value);
        return array;
    }
}
console.log(messages.colors())

clear.addEventListener("click", () => {
    messageBox.innerHTML = ""
    messages.right = [];
    messages.left = [];
    textBox.focus()
});
leftDrop.addEventListener("change", (e) => displayObj());
rightDrop.addEventListener("change", (e) => displayObj());
submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (textBox.value != ""){
    messages.right.length < messages.left.length ? messages.right.push(textBox.value) : messages.left.push(textBox.value)
    textBox.value = ""
    displayObj();
    }
    console.log(messages)
})


function displayObj() {

messageBox.innerHTML = ""
    for (i = 0; i < messages.left.length; i++){
        var left = document.createElement('div');
        left.classList = "left " + messages.colors()[0]
        console.log(left.classList)
        var right = document.createElement('div');
        right.classList = "right " + messages.colors()[1]
        left.textContent = messages.left[i]
        right.textContent = messages.right[i]
        left.innerHTML ? messageBox.appendChild(left) : null;
        right.innerHTML ? messageBox.appendChild(right) : null;
        
       
    }

}