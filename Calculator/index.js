const firstnum = document.getElementById('firstnum')
const secondnum = document.getElementById('secondnum')
const add = document.getElementById('add')
const minus = document.getElementById('minus')
const multiply = document.getElementById('multiply')
const result = document.getElementById('result')

add.addEventListener("click", (e) => {
    if (firstnum.value != NaN && secondnum.value != NaN) {
        result.innerHTML = "= " + (Number(firstnum.value) + Number(secondnum.value))
        firstnum.value = ""
        secondnum.value = ""
    }
});
minus.addEventListener("click", (e) => {
    if (firstnum.value != NaN && secondnum.value != NaN) {
        result.innerHTML = "= " + (Number(firstnum.value) - Number(secondnum.value))
        firstnum.value = ""
        secondnum.value = ""
    }
});
multiply.addEventListener("click", (e) => {
    if (firstnum.value != NaN && secondnum.value != NaN) {
        result.innerHTML = "= " + (Number(firstnum.value) * Number(secondnum.value))
        firstnum.value = ""
        secondnum.value = ""
    }
});
