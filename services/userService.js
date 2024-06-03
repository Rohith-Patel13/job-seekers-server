console.log("userService.js top")
const userDao = require('../daos/userDao');
const { userDto } = require('../dtos/userDto');


exports.listUsers = async () => {
    const users = await userDao.listUsers();
    return users.map(user => userDto(user));
};

exports.getUserById = async (userId) => {
    const user = await userDao.getUserById(userId);
    return userDto(user);
};

exports.createUser = async (userDto) => {
    const user = await userDao.createUser(userDto);
    return userDto(user);
};

exports.updateUser = async (userId, userDto) => {
    const user = await userDao.updateUser(userId, userDto);
    return userDto(user);
};

exports.partialUpdateUser = async (userId, userDto) => {
    const user = await userDao.partialUpdateUser(userId, userDto);
    return userDto(user);
};

exports.deleteUser = async (userId) => {
    const user = await userDao.deleteUser(userId);
    return userDto(user);
};
console.log("userService.js bottom")