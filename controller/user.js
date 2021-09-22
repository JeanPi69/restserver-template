const {response, request} = require('express');

const usersGet = (req = request,res = response)=>{

    res.json({
        msg:'get API - Controlador'
    });

}

const usersPost = (req = request,res = response)=>{

    const {nombre, edad} = req.body;

    res.json({
        msg:'post API - Controlador',
        nombre,
        edad
    });

}

const usersPut = (req = request,res = response)=>{

    const id = req.params.id;

    res.json({
        msg:'put API - Controlador',
        id: id
    });

}

const deletePut = (req = request,res = response)=>{

    res.json({
        msg:'delete API - Controlador'
    });

}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    deletePut
}