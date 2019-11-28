const {Router} = require('express');
const router= Router();
const {getfullInventory, createInventory, getInventory, updateInventory, deleteInventory,findBeer,findBrewery} = require('../controllers/inventory.controllers')
router.route('/')
    .post (createInventory)
    .delete(deleteInventory)
router.route('/:id')
    .get( findBeer)
    .delete(deleteInventory)
module.exports = router;
