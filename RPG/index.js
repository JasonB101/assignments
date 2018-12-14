// var setName = prompt("What is your name?")

var enemies = ["bowser", "scorpion", "spyro", "charizard", "conor"]
var rewards = [
    ["HP20", "AY15", "AK5"],
    ["HP25", "AY15", "AK10"],
    ["HP30", "AY20", "AK15", "E1"],
    ["E2", "STURN"]
]
var enemy;
// CHARACTERS //
var player = {
    name: "Jason",
    hp: 100,
    attack: 25,
    inventory: ["HP20"],
    inventoryLimit: 4,
    energy: 10,
    energyIncrease: 5,
    stealTurn: false,
}

var bowser = {
    name: "Bowser",
    hp: 100,
    attack: 15,
    image: "Bowser.png",
}

var scorpion = {
    name: "Scorpion",
    hp: 100,
    attack: 13,
    image: "scorpion.png",
}

var spyro = {
    name: "Spyro",
    hp: 67,
    attack: 18,
    image: "Spyro.png",
}

var charizard = {
    name: "Charizard",
    hp: 100,
    attack: 15,
    image: "charizard.png",
}

var conor = {
    name: "Conor McGregor",
    hp: 100,
    attack: 8,
    image: "conor.png",
}

//CHARACTERS END //

// CONSTRUCTORS //

createEnemy(eval(enemies[Math.floor(Math.random() * 5)]))

function createEnemy(obj) {

    enemy = {
        name: obj.name,
        hp: obj.hp,
        attack: obj.attack,
        image: obj.image,
        rewards:  genRewards(rewards),
    }
}

// CONSTRUCTORS END //

// DOCUMENT PULLS //
var playerName = document.getElementById('player-name')
var turnState = document.getElementById('turn-state')
var enemyName = document.getElementById('enemy-name')
var punchButton = document.getElementById('punch-button')
var slapButton = document.getElementById('slap-button')
var spitButton = document.getElementById('spit-button')
var playerHealthBar = document.getElementById('player-health-bar')
var playerHealthRatio = document.getElementById('player-health-ratio')
var enemyHealthBar = document.getElementById('enemy-health-bar')
var enemyImage = document.getElementById('enemy-image')
var playerHp = document.getElementById('player-hp')
var playerStrength = document.getElementById('player-strength')
var playerEnergy = document.getElementById('energy')
var playerInventory = document.getElementById('inventory-select')
var useItem = document.getElementById('use-item')
var enemyHp = document.getElementById('enemy-hp')
var enemyStrength = document.getElementById('enemy-strength')
var enemyHealthRatio = document.getElementById('enemy-health-ratio')
var rewardList = document.getElementById('reward-list')

// DOCUMENT PULLS END //


// OBJECT RENDER//

function renderObjects(player, enemy) {
    // PLAYER //
    playerName.textContent = player.name;
    playerHealthBar.value = player.hp;
    playerHealthRatio.textContent = player.hp + "/100";
    playerHp.textContent = "Player HP: " + player.hp;
    playerStrength.textContent = "Attack Strength: " + player.attack;
    playerEnergy.textContent = "Energy: " + player.energy;

    // ENEMY //
    enemyName.textContent = enemy.name;
    enemyHealthBar.value = enemy.hp;
    enemyHealthRatio.textContent = enemy.hp + "/100";
    enemyHp.textContent = "Enemy HP: " + enemy.hp;
    enemyStrength.textContent = "Attack Strength: " + enemy.attack;
    enemyImage.src = "../Images/" + enemy.image
    rewardRender(enemy.rewards)

    function rewardRender(arr) {
        rewardList.innerHTML = ""
        for (let i = 0; i < arr.length; i++) {
            var newReward = document.createElement('label')
            var newBox = document.createElement('input')
            newBox.type = "radio"
            newBox.name = "inventory-pick"
            newBox.value = arr[i]
            newReward.textContent = arr[i]
            newReward.appendChild(newBox)
            rewardList.appendChild(newReward)
        }
    }
}

// OBJECT RENDER END //
renderObjects(player, enemy)

useItem.addEventListener("click", (e) => {

    renderObjects(player, enemy)

})

punchButton.addEventListener("click", (e) => {
    punch(player, enemy)
    renderObjects(player, enemy)
    enemysTurn()
})
slapButton.addEventListener("click", (e) => {
    slap(player, enemy)
    renderObjects(player, enemy)
    enemysTurn()
})
spitButton.addEventListener("click", (e) => {
    spit(player, enemy)
    player.energy = 0
    renderObjects(player, enemy)
    enemysTurn()
})

function disableButtons() {
    punchButton.disabled = true
    slapButton.disabled = true
    spitButton.disabled = true
    useItem.disabled = true
}

function enableButtons() {
    punchButton.disabled = false
    slapButton.disabled = false
    spitButton.disabled = false
    useItem.disabled = false

}

function playersTurn() {
    turnState.textContent = "Player's Turn"
    enableButtons()
    if (player.hp <= 0) {
        turnState.textContent = "Game Over"
        disableButtons()
    }

    player.energy = player.energy + player.energyIncrease
    renderObjects(player, enemy)


}

function enemysTurn() {
    renderObjects(player, enemy)
    disableButtons()
    if (enemy.hp <= 0) {

        createEnemy(eval(enemies[Math.floor(Math.random() * 5)]))
    }
    turnState.textContent = "Enemy's Turn"
    Math.random() < 0.333 ? punch(enemy, player) : slap(enemy, player)
    playersTurn()
}

function genRewards(arr) {
    var newArr = []
    for (let i = 0; i < 3; i++) {
        var randoNum = Math.random()
        var index1;
        var index2;
        if (randoNum < .4) index1 = 0
        else if (randoNum >= .4 && randoNum < .65) index1 = 1
        else if (randoNum >= .65 && randoNum < .85) index1 = 2
        else if (randoNum >= .85) index1 = 3
        var index2 = Math.floor(Math.random() * arr[index1].length)
        newArr.push(arr[index1][index2])
    }
    return newArr
}

function punch(perp, victim) {
    victim.hp = victim.hp - (perp.attack + Math.floor(Math.random() * 8 + 3))

}

function slap(perp, victim) {
    victim.hp = victim.hp - (perp.attack + Math.floor(Math.random() * 3))

}

function spit(perp, victim) {
    victim.hp = victim.hp - perp.energy

}