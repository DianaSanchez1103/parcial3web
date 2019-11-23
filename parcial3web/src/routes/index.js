const express = require('express');
const router = express.Router();

const Usuario = require('../models/usuario');

router.get('/', async (req,res)=>{
    const usuario = await Usuario.find();
    res.render('index',{
        usuario
    });
})

router.post('/add', async (req,res)=>{
    const usuario = new Usuario(req.body);
    await usuario.save();
});

router.get('/edit/:id', async(req,res)=>{
    const {id} = req.body.id;
    const user = await Usuario.remove({_id:id});
    res.render('edit', {
        user
    })
});

router.post('/edit/:id',async (req,res)=>{
    const {id} = req.body.id;
    await Usuario.update({
        _id:id
    },req.body);
    res.redirect('/');
})

router.get('/delete/:id', async(req,res)=>{
    const {id} = req.params.id;
    const user = await Usuario.remove({_id:id});
    res.redirect('/');
})

module.exports = router;