const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//conectando la base
mongoose.connect('mongodb://localhost/perrito')
    .then(db=>console.log('Db conectada'))
    .catch(err=>console.log(err));
//import routes
const indexRoutes = require('./routes/index');

mongoose.set('debug',process.env.NODE_ENV === 'development');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));

//routes
app.use(express.urlencoded({extended: false}));

app.use('/',indexRoutes);
app.listen(app.get('port'), ()=> {
    console.log(`Server on port ${app.get('port')}`);
})