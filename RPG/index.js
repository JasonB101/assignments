var setName = prompt("What is your name?")
var rewards = [
    ["HP20", "AY15", "AK5"],
    ["HP25", "AY15", "AK10"],
    ["HP30", "AY20", "AK15", "E1"],
    ["E2", "STURN"]
]
var enemy;
// CHARACTERS //
var player = {
    name: setName,
    hp: 100,
    attack: 25,
    inventory: ["HP20"],
    inventoryLimit: 4,
    accuracy: 0.5,
    energy: 10,
    energyIncrease: 5,
    killed: 0,
    stealTurn: false,
}

var enemies = [
    bowser = {
        name: "Bowser",
        hp: 100,
        attack: 7,
        image: "Bowser.png",
    },

    scorpion = {
        name: "Scorpion",
        hp: 100,
        attack: 5,
        image: "scorpion.png",
    },

    spyro = {
        name: "Spyro",
        hp: 100,
        attack: 12,
        image: "Spyro.png",
    },

    charizard = {
        name: "Charizard",
        hp: 100,
        attack: 9,
        image: "charizard.png",
    },

    conor = {
        name: "Conor McGregor",
        hp: 100,
        attack: 3,
        image: "conor.png",
    },
]

//CHARACTERS END //

// CONSTRUCTORS //

var enemy = new Enemy(enemies[Math.floor(Math.random() * 5)])

function Enemy(obj) {
    this.name = obj.name;
    this.hp = obj.hp;
    this.attack = obj.attack;
    this.image = obj.image;
    this.rewards = genRewards(rewards);
    this.accuracy = .6;
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
var enemyBox = document.getElementById('enemy-box')
var action = document.querySelector('h5')
var enemiesKilled = document.getElementById('killed')
var rewardBox = document.getElementById('reward-box')
var rewardSelection = document.querySelector('input[name = "inventory-pick"]')

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
    enemiesKilled.textContent = "Enemies Killed: " + player.killed;
    renderInventory(player.inventory)

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
            var newBox = document.createElement('button')
            newBox.type = "button"
            newBox.textContent = arr[i]
            newBox.value = arr[i]
            newBox.classList = "reward-button"
            newBox.addEventListener("click", addToInventory)
            rewardList.appendChild(newBox)
        }
    }
}

// OBJECT RENDER END //
renderObjects(player, enemy)

useItem.addEventListener("click", (e) => {
    var arr = itemParse(playerInventory.selectedOptions[0].value)
    if (arr[0] === "HP") player.hp += +arr[1]
    else if (arr[0] === "AK") player.attack += +arr[1]
    else if (arr[0] === "AY") player.accuracy += arr[1] / 100
    else if (arr[0] === "E") player.energyIncrease += +arr[1]
    else if (arr[0] === "STURN") player.stealTurn = true

    player.inventory.splice(playerInventory.selectedOptions[0].index, 1)
    console.log(player.accuracy)
    renderObjects(player, enemy)
})

punchButton.addEventListener("click", (e) => {
    action.style.visibility = "hidden"
    punch(player, enemy, player.accuracy)
    renderObjects(player, enemy)
    console.log(player.stealTurn)
    if (player.stealTurn) {
        player.stealTurn = false
        console.log(player.stealTurn)

    } else {
        enemysTurn()
    }
})
slapButton.addEventListener("click", (e) => {
    action.style.visibility = "hidden"
    slap(player, enemy, player.accuracy)
    renderObjects(player, enemy)
    if (player.stealTurn) {
        player.stealTurn = false
    } else {
        enemysTurn()
    }
})
spitButton.addEventListener("click", (e) => {
    action.style.visibility = "hidden"
    spit(player, enemy)
    player.energy = 0
    renderObjects(player, enemy)
    if (player.stealTurn) {
        player.stealTurn = false
    } else {
        enemysTurn()
    }
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
    enemyBox.style.visibility = "visible"
    turnState.textContent = "Player's Turn"
    enableButtons()
    if (player.hp <= 0) {
        renderObjects(player, enemy)
        turnState.textContent = "Game Over"
        disableButtons()
    } else {

    player.energy = player.energy + player.energyIncrease
    renderObjects(player, enemy)
    }
    if (player.killed >= 10) winGame()
}

function enemysTurn() {
    renderObjects(player, enemy)
    disableButtons()
    if (enemy.hp <= 0) {
        enemyBox.style.visibility = "hidden"
        rewardBox.style.visibility = "visible"
        player.killed += 1
    } else {

        rewardBox.style.visibility = "hidden"

        turnState.textContent = "Enemy's Turn"
        var timeOut = setTimeout(function () {
            if (Math.random() < 0.333) {
                action.textContent = "Punch!"
                action.style.visibility = "visible"
                punch(enemy, player, enemy.accuracy)
            } else {
                action.textContent = "Slap!"
                action.style.visibility = "visible"
                slap(enemy, player, enemy.accuracy)
            }
            playersTurn()
        }, 1500)
    }
    timeOut
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

function renderInventory(rewards) {
    playerInventory.innerHTML = ""
    for (let i = 0; i < rewards.length; i++) {
        var newInv = document.createElement('option')
        newInv.textContent = rewards[i]
        playerInventory.appendChild(newInv)
    }
}

function createNewEnemy() {
    enemy = new Enemy(enemies[Math.floor(Math.random() * 5)])
    rewardBox.style.visibility = "hidden"
    playersTurn()
}

function addToInventory(e) {
    player.inventory.push(e.target.value)
    createNewEnemy()
}

function punch(perp, victim, accuracy) {
    if (Math.random() < accuracy + .2) {
        victim.hp = victim.hp - (perp.attack + Math.floor(Math.random() * 3))
        var audio = new Audio('/Sounds/Punch.wav');
        audio.play();
    } else {
        action.style.visibility = "visible"
        action.textContent = "Missed!"
        var audio = new Audio('/Sounds/Miss.wav');
        audio.play();
    }
}

function slap(perp, victim, accuracy) {
    if (Math.random() < accuracy - .1) {
        victim.hp = victim.hp - (perp.attack + Math.floor(Math.random() * 8 + 3))
        var audio = new Audio('/Sounds/Slap.wav');
        audio.play();
    } else {
        action.style.visibility = "visible"
        action.textContent = "Missed!"
        var audio = new Audio('/Sounds/Miss.wav');
        audio.play();
    }
}

function spit(perp, victim, accuracy) {
    victim.hp = victim.hp - perp.energy
    var audio = new Audio('/Sounds/Spit.wav');
        audio.play();

}

function itemParse(item) {
    return item.split(/([0-9]+)/).filter(Boolean)

}

function winGame(){
    turnState.textContent = "Congratulations, you won! 10 enemies killed."
    disableButtons()
}