const mongoose = require('mongoose');
const dotenv = require('dotenv');
async function connect() {

    // //c1 callback
    // try{
    //     await mongoose.connect('mongodb://localhost:27017/netflex_dev',{
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //         useCreateIndex:true, 
    //     });
    //     console.log("okkkk");
    // }catch(err){
    //     console.log("failed");
    // }

    //c2 promise
    dotenv.config()
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useCreateIndex:true, 
        useUnifiedTopology: true
    })
    .then(() => console.log("dc connecting"))
    .catch((err) => console.log(err));
    
}

module.exports =  {connect};
