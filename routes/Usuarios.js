const route = require('express').Router();
const User = require('../src/app/model/modelUsuarios');
const bcrypt = require('bcrypt');

//POST

route.post('/user', async (req, res) => {

    const user = req.body.user;
    const password = await bcrypt.hashSync(req.body.password, 10);

    const userCrypt = {user, password};
    console.log(userCrypt)
    try {

        const response = await User.create(userCrypt)
        res.status(201).json(response);
        
    } catch (error) {
        
        res.status(500).json({message: 'erro: ' + error});

    }

});

//GET ALL

route.get('/user', async(req, res) => {

    try {
        
        const users = await User.find();
        res.status(200).json(users);

    } catch (error) {
        
    }

});

module.exports = route;