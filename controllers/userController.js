console.log("userController.js top")
const userService = require('../services/userService');
const { validateUser, validateUserId } = require('../validators/userValidator');

exports.listUsers = async (requsetObject, responseObject) => {
    try {
        const users = await userService.listUsers();
        responseObject.send(users);
    } catch (error) {
        responseObject.status(500).send({ error: error.message });
    }
};


exports.getUserById = async (requsetObject, responseObject) => {
    try {
        const { userId } = requsetObject.params;
        await validateUserId(userId);
        const user = await userService.getUserById(userId);
        responseObject.send(user);
    } catch (error) {
        responseObject.status(400).send({ error: error.message });
    }
};

exports.createUser = async (requsetObject, responseObject) => {
    try {
        const userDto = requsetObject.body;
        await validateUser(userDto);
        const user = await userService.createUser(userDto);
        responseObject.status(201).send(user);
    } catch (error) {
        responseObject.status(400).send({ error: error.message });
    }
};


exports.updateUser = async (requsetObject, responseObject) => {
    try {
        const { userId } = requsetObject.params;
        const userDto = requsetObject.body;
        await validateUserId(userId);
        await validateUser(userDto);
        const user = await userService.updateUser(userId, userDto);
        responseObject.send(user);
    } catch (error) {
        responseObject.status(400).send({ error: error.message });
    }
};

exports.partialUpdateUser = async (requsetObject, responseObject) => {
    try {
        const { userId } = requsetObject.params;
        const userDto = requsetObject.body;
        await validateUserId(userId);
        const user = await userService.partialUpdateUser(userId, userDto);
        responseObject.send(user);
    } catch (error) {
        responseObject.status(400).send({ error: error.message });
    }
};


exports.deleteUser = async (requsetObject, responseObject) => {
    try {
        const { userId } = requsetObject.params;
        await validateUserId(userId);
        await userService.deleteUser(userId);
        responseObject.status(204).send("user deleted");
    } catch (error) {
        responseObject.status(400).send({ error: error.message });
    }
};
console.log("userController.js bottom")