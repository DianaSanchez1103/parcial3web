const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const perro = new Schema({
    nombre:{
        type:String,
        required: true,
        unique:true},
    raza: String,
    edad:Number,
    dueno:String
},{
    timestamps: true
});

module.exports = mongoose.model('usuario',perro);