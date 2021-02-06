let userRepository = require('./lowdb.repository');

function getUsers() {
        return userRepository.getUsers();
}

function getUser(id) {
        return userRepository.getUserById(id);
}

function createUser(product) {
        return userRepository.createUser(product);
}

function deleteUser(id) {
        return userRepository.deleteUserById(id);
}

module.exports = {
        getUsers,
        getUser,
        createUser,
        deleteUser,
};
