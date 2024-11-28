const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const { check } = require('express-validator');

// router.post('/register', registerUser);

router.get('/', userController.findAll);
router.post('/', [
    check('name').notEmpty().withMessage("Name is required"),
    check('email').notEmpty().withMessage("Email is requried")
    .isEmail().withMessage("invalid email format")
], userController.createUser); 
router.put('/:email', userController.updateUser);
router.delete('/:email', userController.deleteUser);
router.get('/:email', userController.findUserByEmail);

module.exports = router;
