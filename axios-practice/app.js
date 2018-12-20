const baseURL = "https://api.vschool.io/jason/todo/"
const form = document.querySelector('form')
const submit = document.querySelector('button')
const listWrapper = document.getElementById('list-wrapper')
const imageUrl = document.getElementById('img-url')
const formImage = document.getElementById('form-image')
getTodos()

// let lukeSkywalker = axios.get('https://swapi.co/api/people/').then(data => console.log(data))
function postTodo() {
    if (form.title.value) {
        let newPackage = new Package()
        axios.post(baseURL, newPackage).then(response => renderResponse(response.data))
        form.reset()
        form.title.focus()
    } else {
        alert("A title is required to submit this todo.")
        form.title.focus()
    }
}

function getTodos() {
    axios.get(baseURL).then(loopandRenderTodos)
}

function loopandRenderTodos(response) {
    response.data.forEach(todoObject => renderResponse(todoObject))
}

function Package() {
    this.title = form.title.value;
    this.description = form.desc.value;
    this.price = form.price.value;
    this.imgUrl = formImage.value;
    this.completed = form.completed.checked;
}

function renderResponse(response) {
    let rendered = new RenderObject(response)
    let itemWrapper = document.createElement('div')
    itemWrapper.classList = "item-wrapper"
    itemWrapper.id = rendered.id
    let number = document.createElement('p')
    number.classList = "number"
    number.textContent = String(listWrapper.children.length + 1) + "."
    let deleteX = document.createElement('p')
    deleteX.classList = "deleteX"
    deleteX.textContent = "X"
    deleteX.addEventListener("click", deleteTodo)
    itemWrapper.appendChild(number)
    itemWrapper.appendChild(deleteX)

    for (key in rendered) {
        let item = document.createElement(rendered[key].elementType)
        if (rendered[key].elementType === "img"){
            item.classList = rendered[key].class
            item.src = rendered[key].value
        } else {
        item.classList = rendered[key].class
        item.textContent = rendered[key].value
        if (rendered[key].holder !== undefined) {
            item.value = rendered[key].holder
            item.addEventListener("click", updateTodo)
        }
    }
        itemWrapper.appendChild(item)
    }
    listWrapper.appendChild(itemWrapper)


}

function RenderObject(obj) {
    this.title = {
        elementType: "h3",
        value: obj.title,
        class: "todo-title"
    }
    this.description = {
        elementType: "p",
        value: obj.description,
        class: "todo-desc"
    }
    this.price = {
        elementType: "p",
        value: obj.price,
        class: "todo-title"
    }
    this.imgUrl = {
        elementType: "img",
        value: obj.imgUrl,
        class: "todo-image"
    }
    this.completed = {
        elementType: "p",
        value: obj.completed ? "✓ Completed" : "X Not Complete",
        class: (obj.completed ? "green" : "red") + " complete-check",
        holder: obj.completed ? true : false,

    }
    this.id = obj._id;
}



submit.addEventListener("click", postTodo)

imageUrl.addEventListener("click", (e) => {
    navigator.clipboard.readText().then(response => {
        formImage.src = response
        formImage.value = response
    })
});

function deleteTodo(e) {
    const id = e.target.parentNode.id
    e.target.parentNode.remove()
    axios.delete(baseURL + id).then(changeItemIndex, () => alert("There was a problem deleting your todo :("));
}

function updateTodo(e) {
    let id = e.target.parentNode.id
    let update = {
        completed: !e.target.value
    }
    axios.put(baseURL + id, update).then(response => {
        if (response.data.completed) {
            e.target.classList = "green complete-check"
            e.target.value = true
            e.target.textContent = "✓ Completed"
        } else {
            e.target.classList = "red complete-check"
            e.target.value = false
            e.target.textContent = "X Not Complete"
        }

        (response.data.completed ? "green" : "red") + " complete-check"
    });

}

function changeItemIndex() {
    for (i = 0; i < listWrapper.children.length + 1; i++) {
        if (listWrapper.childNodes[i].childNodes[0]) {
            listWrapper.childNodes[i].childNodes[0].textContent = i + "."
        }
    }
}