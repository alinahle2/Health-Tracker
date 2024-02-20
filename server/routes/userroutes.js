const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');

//  all users
router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);

//  create a new user
router.post('/post', userController.createUser);

// update a user by ID
router.put('/put/:id', userController.updateUserById);

//  delete a user by ID
router.delete('/delete/:id', userController.deleteUserById);

module.exports = router;
