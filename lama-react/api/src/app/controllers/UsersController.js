const User = require('../models/User');
const CryptoJS = require('crypto-js');


class UsersController  {

    //[GET] /find/:id
    async get_user(req, res){
        try{
            const user = await User.findById(req.params.id);
            const {password, ...info} = user._doc;
            res.status(200).json(info);
        }catch(err){
            res.status(500).json(err);
        }
    }

    // [GET] /allow admin
    async get_all_user(req, res){
        const query = req.query.new;
        if(req.user.isAdmin){
            try{
                const users = query ? await User.find().limit(5) : await User.find();
                res.status(200).json(users);
            }catch(err){
                res.status(500).json(err);
            }
        }else{
            res.status(403).json(" You are not allowed to see all users");
        }
    }


    add_user(req, res){
        res.send("add");
    }

    //[PUT] user/:id
    // req.user.id la id: user._id cua accessToken(login)
    async update_user(req, res){
        if(req.user.id === req.params.id || req.user.isAdmin){
            if(req.body.password){
                req.body.password = CryptoJS.AES.encrypt(
                    req.body.password,
                    process.env.SECRET_KEY
                ).toString();
            }

            try{
                const updatedUser = await User.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    {
                        new: true
                    }
                );
                res.status(200).json(updatedUser);
                
            }catch(err){
                res.status(500).json(err);

            }

        }else{
            res.status(403).json("You can update only your account");
        }
    }

    //[Del] /:id
    async delete_user(req, res){
        if(req.user.id === req.params.id || req.user.isAdmin){
            try{
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json(" User has been deleted ...");

            }catch(err){
                res.status(500).json(err);
            }
        }else{
            res.status(403).json("You can delete your account");
        }
    }
}

module.exports = new UsersController; // khoi tao dtg va export ra ngoai
