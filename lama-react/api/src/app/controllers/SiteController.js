const Course = require('../models/Course');
const {multilMongooseToObject} = require('../../util/moongose')
class SitesController  {
    
    // [GET] /news
    home(req,res, next){

        res.send("home");
        
    }

    search(req, res){
        res.send("search");
    }
}

module.exports = new SitesController; // khoi tao dtg va export ra ngoai
