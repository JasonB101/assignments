var form = document.travelForm

form.submitButton.addEventListener("click", function (e) {
    e.preventDefault()
    var dietaryRestrictions = []
    if (form.vegetarian.checked) {
        dietaryRestrictions.push("Vegetarian")
    }
    if (form.lactose.checked) {
        dietaryRestrictions.push("Lactose Intolerant")
    }
    if (form.peanut.checked) {
        dietaryRestrictions.push("Peanut Allergy")
    }

    alert(`
    First name: ${form.firstName.value}
    Last name: ${form.lastName.value}
    Age: ${form.age.value}
    Gender: ${form.gender.value}
    Location: ${form.location.value}
    Dietary Restrictions: ${dietaryRestrictions.join(", ")}
         `)
})