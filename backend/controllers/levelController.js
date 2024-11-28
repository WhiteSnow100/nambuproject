const { validationResult } = require('express-validator');
const levelService = require('../services/levelService');

const findLevelByEmail = async(req, res) => {    
    const {email} = req.params;  // req.params.email 값을 email 변수에 할당
    try{
        const levels = await levelService.findLevelByEmail(email);
        if (!levels) {
            return res.status(404).json({ message: 'Level not found' });
        }
        res.status(200).json(level);
    }catch(e){
        console.error('Error fetching level:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const updateLevel = async(req, res) => {
    const id =req.params.id;
    const level = req.body
    console.log("levelcontroller-21 : ",level)   
    try{
        const result = await levelService.updateLevel(id, level);        
       res.status(200).json({data: result, message: 'ok'});        
    }catch(e){
       console.error('Error during update:', e.message);
       res.status(500).json({message: e.message});
    }
}

module.exports = {
    updateLevel,
    findLevelByEmail, 
}