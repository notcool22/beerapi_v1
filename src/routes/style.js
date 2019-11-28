const {Router} = require('express');
const router= Router();

const {findStyle,findBrewery} = require('../controllers/inventory.controllers')

router.route('/:id')
       .get(findStyle)
module.exports = router;
