let config = require('../config')
let userModel = config.getDB().get('users');


function getUsers() {
        return userModel.value();
}

function getUserById(id) {
        const found = userModel.filter({ id: Number(id) }).value();
        return found.length ? found[0] : {};
}

function createUser(product) {
        userModel.push(product).write();
}

function deleteUserById(id) {
        userModel.remove({ id: Number(id) }).write();
}

module.exports = {
        getUsers,
        getUserById,
        createUser,
        deleteUserById
}