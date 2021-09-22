
const { Router } = require('express');
const { usersGet, usersPost, usersPut, deletePut } = require('../controller/user');

const router = Router();

router.get('/', usersGet);

router.put('/:id', usersPut);

router.post('/',usersPost);

router.delete('/',deletePut);


module.exports = router;