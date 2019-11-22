const {Router} = require('express');
const router= Router();
const {getfullInventory, createInventory, getInventory, updateInventory, deleteInventory,findBeer,findBrewery} = require('../controllers/inventory.controllers')

router.route('/')
        .get(findBrewery)
    
module.exports = router;
