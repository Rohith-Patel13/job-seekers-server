console.log("userDao.js top")
const User = require('../models/userModel');

exports.listUsers = async () => {
    return await User.find();
};

exports.getUserById = async (userId) => {
    return await User.findById(userId);
};

exports.createUser = async (userDto) => {
    const user = await User.create(userDto);
    return  user
};

exports.updateUser = async (userId, userDto) => {
    return await User.findByIdAndUpdate(userId, userDto);
};

exports.partialUpdateUser = async (userId, userDto) => {
    return await User.findByIdAndUpdate(userId, userDto );
};

exports.deleteUser = async (userId) => {
    return await User.findByIdAndUpdate(userId);
};
console.log("userDao.js bottom")
