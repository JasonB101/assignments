var submit = document.getElementById('submit-button')
var list = document.getElementById('list')
var textBox = document.getElementById('title')



submit.addEventListener("click", createItem)

function createItem() {
    var listItem = document.createElement('li')
    var itemName = document.createElement('div')
    var edit = document.createElement('button')
    var remove = document.createElement('button')
    edit.textContent = "edit"
    remove.textContent = "X"
    itemName.innerHTML = textBox.value
    edit.addEventListener("click", editItem)
    remove.addEventListener("click", removeItem)
    listItem.appendChild(itemName)
    listItem.appendChild(edit)
    listItem.appendChild(remove)
    list.appendChild(listItem)

}

function editItem(event) {
    event.target.parentNode.childNodes[0].textContent = prompt("Please enter new Item name: ") || event.target.parentNode.childNodes[0].textContent
}
function removeItem(event) {
    event.target.parentNode.remove()
}