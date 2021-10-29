const Movie = require('../models/Movie');

class MoviesController  {
    
    // [POST] /create
    async create_movie(req, res){
        if(req.user.isAdmin){
            const newMovie = new Movie(req.body);
            try{
                const savedMovie = await newMovie.save();
                res.status(200).json(savedMovie);

            }catch(err){
                res.status(500).json(err);
            }

        }else{
            res.status(403).json(" you are not allowed");
        }
    }

    // [PUT] /:id
    async update_movie(req, res){
        if(req.user.isAdmin){
            
            try{
                const updateMovie = await Movie.findByIdAndUpdate(
                    req.params.id,
                    {$set:req.body},
                    {new:true});
                res.status(200).json(updateMovie);

            }catch(err){
                res.status(500).json(err);
            }

        }else{
            res.status(403).json(" you are not allowed");
        }
    }

    // [DELETE] /:id
    async delete_movie(req, res){
        if(req.user.isAdmin){

            try{
                const updateMovie = await Movie.findByIdAndDelete(req.params.id);
                res.status(200).json("Movie has been deleted...");
                
            }catch(err){
                res.status(500).json(err);
            }

        }else{
            res.status(403).json(" you are not allowed");
        }
    }

    // [GET] /:id 
    async get_movie(req, res){
        
        try{
            const movie = await Movie.findById(req.params.id);
            res.status(200).json(movie);
            
        }catch(err){
            res.status(500).json(err);
        }
    }

     // [GET] /random?type = series
    async random_movie(req, res){
        const type = req.query.type;
        let movie;
        try {
            if (type === "series") {
                movie = await Movie.aggregate([
                    { $match: { isSeries: true } },
                    { $sample: { size: 1 } },
            ]);

        } else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } },
            ]);
        }
            res.status(200).json(movie);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    //[GET] /all
    async get_all(req, res){
        
        if(req.user.isAdmin){
            try{
                const movies = await Movie.find();
                res.status(200).json(movies.reverse());
                
            }catch(err){
                res.status(500).json(err);
            }
        }else{
            res.status(403).json(" you are not allowed");
        }   
    }
}

module.exports = new MoviesController; 
