
const listRoute = require('./list.route');
const usersRoute = require('./users.route');
const moviesRoute =  require('./movies.route');
const authRoute =  require('./auth.route');

function route(app){
    app.use('/auth', authRoute);    
    app.use('/movies', moviesRoute);
    app.use('/user', usersRoute);
    app.use('/lists', listRoute);
}

module.exports = route;
