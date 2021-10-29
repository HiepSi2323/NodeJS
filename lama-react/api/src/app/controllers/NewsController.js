
class NewsController  {
    
    // [GET] /news
    index(req,res){
        res.send('news');
    }

    show(erq, res){
        res.send("detail");
    }
}

module.exports = new NewsController; // khoi tao dtg va export ra ngoai
