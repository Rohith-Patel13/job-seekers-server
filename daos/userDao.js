console.log("userDao.js top")
const User = require('../models/userModel');

exports.listUsers = async () => {
    const users=await User.find()
    return users;
};

exports.getUserById = async (userId) => {
    return await User.findById(userId);
};

exports.createUser = async (userDto) => {
    const user = await User.create(userDto);
    return  user
};

exports.updateUser = async (userId, userDto) => {
   return await User.findByIdAndUpdate(userId, userDto, { new: true });
};

exports.partialUpdateUser = async (userId, userDto) => {
   return await User.findByIdAndUpdate(userId, userDto, { new: true });
};


exports.deleteUser = async (userId) => {
    
   return await User.findByIdAndDelete(userId);
};
console.log("userDao.js bottom")
