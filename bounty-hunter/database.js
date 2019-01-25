const uuid = require('uuid')
const Bounty = function (bounty) {
    this._id = uuid()
    this.fname = bounty.fname
    this.lname = bounty.lname
    this.killed = bounty.killed
    this.price = bounty.price
    this.type = bounty.type

}

const Database = function () {
    this.bounties = []
}

Database.prototype.getAllItems = function () {
    return this.bounties
}

Database.prototype.getItemById = function (id) {
    return this.bounties.find(b => b._id === id)
}

Database.prototype.saveNewItem = function (bounty) {
    const newBounty = new Bounty(bounty)
    this.bounties.push(newBounty)
    return newBounty
}

Database.prototype.updateItemById = function (id, bounty) {
    const bountyToUpdate = this.bounties.find(b => {
        return b._id === id
    })

    if (bountyToUpdate === undefined) return
    const index = this.bounties.indexOf(bountyToUpdate)
    const newBounty = { ...bountyToUpdate, ...bounty }
    this.bounties.splice(index, 1, newBounty)
    return newBounty
}

Database.prototype.deleteItemById = function (id) {
    const bountyToUpdate = this.bounties.find(b => {
        return b._id === id
    })
    if (bountyToUpdate === undefined) return
    const index = this.bounties.indexOf(bountyToUpdate)
    this.bounties.splice(index, 1)
}

module.exports = new Database()