console.log("userDao.js top")
const User = require('../models/userModel');

exports.listUsers = async () => {
    return await User.find({ deleted: false });
};

exports.getUserById = async (userId) => {
    return await User.findById(userId).where({ deleted: false });
};

exports.createUser = async (userDto) => {
    const user = await User.create(userDto);
    return  user
};

exports.updateUser = async (userId, userDto) => {
    return await User.findByIdAndUpdate(userId, userDto, { new: true }).where({ deleted: false });
};

exports.partialUpdateUser = async (userId, userDto) => {
    return await User.findByIdAndUpdate(userId, { $set: userDto }, { new: true }).where({ deleted: false });
};

exports.deleteUser = async (userId) => {
    return await User.findByIdAndUpdate(userId, { deleted: true }, { new: true });
};
console.log("userDao.js bottom")
