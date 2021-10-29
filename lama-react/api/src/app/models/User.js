const mongoose = require('mongoose');

const UserSchema =  new mongoose.Schema(
    {
        username:   {type:String, requrie: true, unique:true},
        email:      {type:String, requrie: true, unique:true},
        password:   {type:String, requrie: true},
        profilePic: {type:String, default:""},
        isAdmin:    {type:Boolean, default:false}
    },
    {timestamps: true}
);

module.exports =  mongoose.model("User", UserSchema);