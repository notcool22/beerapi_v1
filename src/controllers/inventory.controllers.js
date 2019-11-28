const inventoryCtrl = {};
const Inventory = require('../models/beer');


inventoryCtrl.createInventory = async(req,res)=> {
    const { Name,Brewery,Style,Description,Address,Establishment } = req.body;
    const newBeer = new Inventory({
        Name: Name,
        Style: Style,
        Brewery: Brewery,
        Address:Address,
        Establishment:Establishment,
        Description: Description
    });
    await newBeer.save();
    res.json({message:'New Item added'});
}

inventoryCtrl.deleteInventory =async(req,res)=> {
    const beer = await Inventory.findOneAndDelete({Name:req.params.id});
    res.json('Item Deleted');
    
}

inventoryCtrl.findBrewery =async(req,res)=> {
    const brewery = await Inventory.find({Brewery: req.params.id});
    res.json(brewery);
}
inventoryCtrl.findBeer =async(req,res)=> {
    const beer = await Inventory.find({Name: req.params.id});
    res.json(beer);
}
inventoryCtrl.findStyle =async(req,res)=> {
    const style = await Inventory.find({Style: req.params.id});
    res.json(style);
}

module.exports = inventoryCtrl;
