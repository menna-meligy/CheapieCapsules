const{ validationResult}= require('express-validator'); 

const bcrypt = require ('bctyptjs'); 

const User = require('../models/user')

const User = require('../util/models/user');

exports.signup = async(req, res, next)=>
{
    const errors = validationResult(req);
    if(!errors.isEmpty())
    return 

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    try {
        const handlePassword = await bcrypt.hash(password, 12);
        const userDetails = {

            name: name, 
            email: email, 
            password: hashedPassword
        }
        const result = await User.save(userDetails);
        res.status(201).json({message: 'user registered!'})
    } catch ( err) {
        if(! err.statusCode){
            err.statusCode = 500;
        }

        next(err)
    }

}