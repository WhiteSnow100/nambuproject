const { validationResult } = require('express-validator');
const userService = require('../services/userService');

const createUser = async(req, res) => {
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array().map(e=>e.msg)});            
        }
        const user = await userService.createUser(req.body);
        res.status(201).json({data:user, message:'ok'});
    }catch(e){
        res.status(500).json({message: e.message});
    }
}

const findAll = async(req, res) => {
    try{
        const users = await userService.findAll();
        res.status(200).json({data: users, message: 'ok'});
    }catch(e){
        res.status(500).json({message: e.message});
    }
}

const findUserByEmail = async(req, res) => {    
    const {email} =req.params;  // req.params.email 값을 email 변수에 할당
    try{
        const user = await userService.findUserByEmail(email);
        res.status(200).json({data: user, message: 'ok'});
    }catch(e){
        res.status(500).json({message: e.message});
    }
}

const updateUser = async(req, res) => {
    const {email} =req.params;
    const userData = req.body;    
    try{
       const user = await userService.updateUser(email, userData);        
       res.status(200).json({data: user, message: 'ok'});        
    }catch(e){
        console.error('Error during update:', e.message);
        res.status(500).json({message: e.message});
    }
}

const deleteUser = async(req, res) => {
    const {email} =req.params;
    try{
        await userService.deleteUser(email);
        res.status(200).json({message: 'User deleted successfully'})
    }catch(e){
        res.status(500).json({message: e.message});
    }
}

module.exports = {
    createUser,
    findAll,
    findUserByEmail,
    updateUser,
    deleteUser,
}