const {Schema, model}=require('mongoose');

const beerSchema= new Schema({
    Name:{
        type:String,
        required: true,
        trim: true,
        unique:true,
       
    },
    Style:{
        type:String,
        required: true
    },
    Brewery:{
        type:String,
        required: true
    }, 
    Address:{
        type:String,
        required: true
    }, 
     Establishment:{
        type:String,
        required: true
    },
       
    Description:{
        type:String,
        required: true
    }
});
module.exports = model('beer',beerSchema);