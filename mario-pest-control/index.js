const result = document.getElementById("result")
const goomba = document.getElementById("goomba")
const bobomb = document.getElementById("bobomb")
const cheepcheep = document.getElementById("cheepcheep")
const calculate = document.getElementById("calculate")
const reset = document.getElementById("reset")
const amount = document.getElementById("amount")

//Instead of using ternaries, try writing a function that will perform the task, e.g. handleInvalidInput(goomba.value). It'll be less repetitive that way.

calculate.addEventListener("click", (e) => {
    !goomba.value || Math.sign(goomba.valueAsNumber) === -1 ?  goomba.valueAsNumber = 0 : null
    !bobomb.value || Math.sign(bobomb.valueAsNumber) === -1 ?  bobomb.valueAsNumber = 0 : null
    !cheepcheep.value || Math.sign(cheepcheep.valueAsNumber) === -1 ?  cheepcheep.valueAsNumber = 0 : null
    result.textContent = "You have eliminated " + (goomba.valueAsNumber + bobomb.valueAsNumber + cheepcheep.valueAsNumber) + " baddies!";
    amount.textContent = "You have made " + ((goomba.valueAsNumber * 5) + (bobomb.valueAsNumber * 7) + (cheepcheep.valueAsNumber * 11)) + " coins!";
})
reset.addEventListener("click", (e) => {
    goomba.value = ""
    bobomb.value = ""
    cheepcheep.value = ""
    result.textContent = "You have eliminated 0 baddies!"
    amount.textContent = "You have made 0 coins!";
})
