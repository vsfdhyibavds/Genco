const express=require('express');
const router = express.Router()
const User = require('../models/User')

router.get('/login', (req, res) => {
    const locals={
        title:'Login',
    }
    res.render('login', locals);
})
router.get('/dashboard', (req, res) => {
    const locals={
        title:'Dashboard',
    }
    res.render('dashboard', locals);
})
router.get('/register', (req, res) => {
    const locals={
        title:'Register',
    }
    res.render('register', locals);
})
router.post('/register-post', async(req, res) => {

        const user=new User({
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        })
        
        try {
            const saveuser=await user.save()
            res.json({'message':'User Added successfully'})
            res.redirect('/login');
        } catch (err) {
            console.log(err);
        }
})

router.post('/authenticate', async(req, res) => {
    const username=req.body.username;
    const password=req.body.password;
    const user = await User.findOne({username});
    if (user) {
            res.redirect('/dashboard');
        }else{
             return res.status(401).json({ message: 'Invalid email or password' });
    }
    console.log(user);
    
})
module.exports = router