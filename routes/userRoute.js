const express = require('express');
const router = express.Router();

const User = require('../models/User');
const {postUser} = require('../Validation/user.validation')

router.get('/', async(req,res)=>{
    try {
        const user = await User.find();
        res.json(user)
    } catch (error) {
        res.json({messageErr:error})
    }
})


router.post('/add', async(req,res)=>{
    const {error} = postUser(req.body);
    if(error)  return res.status(400).send(error.details[0].message);

    const emailExist = await User.findOne({email:req.body.email});
    if(emailExist) return res.status(400).send('Email already exists!');

    const newUser = new User({
        username: req.body.username,
        email   : req.body.email,
        password: req.body.password
    })
    try {
        const saveUser = await newUser.save();
        res.json(saveUser)
    } catch (error) {
        
    }
})

router.delete('/delete/:id', async(req, res)=>{
    try {
        const user = await User.remove({_id:req.body.id});
        req.json(user);
    } catch (error) {
        res.status(400).send({errorMessage:error})
    }
})


// function sum(a,b){
//     return a+b;
// }

module.exports = router;
