const route = require('express').Router();
const User = require('../src/app/model/modelUsuarios');
const bcrypt = require('bcrypt');

//LOGIN

route.post('/login', async(req, res) => {

    const userLogin = req.body;
    
    const user = await User.findOne({user: userLogin.user})
    

    if(user != undefined) {

        const aut = await bcrypt.compareSync(userLogin.password, user.password);

        if(aut) {
            res.status(200).json({message: 'login realizado com sucesso!'});
        } else {
            res.status(401).json({message: 'Usuario ou senha incorretos'});
        }
        


    } else {

        res.status(404).json({message: 'usuario nao encontrado!'});

    }

});

module.exports = route;