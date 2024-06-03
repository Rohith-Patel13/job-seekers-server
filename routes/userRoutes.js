console.log("userRoutes.js top")
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Authentication middleware
const basicAuth = require('express-basic-auth');

router.use(basicAuth({
    users: { 'admin': 'password' },
    challenge: true
}));

router.get('/', userController.listUsers);
router.get('/:userId', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:userId', userController.updateUser);
router.patch('/:userId', userController.partialUpdateUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
console.log("userRoutes.js bottom")
