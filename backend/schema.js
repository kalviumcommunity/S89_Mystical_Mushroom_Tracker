const mongoose = require('mongoose');

const mushroomSchema =  mongoose.Schema({                   
    name:{
        type:String,
        required:true
    },                
    location:{
        type:String,
        required:true
    },            
    rarity:{
        type:String,
        required:true
    },              
    effects:{
        type:[String]
    },           
    discovered_by: {
        type:String 
    }       
});

const mushroom = mongoose.model("Mushroom",mushroomSchema);

module.exports = mushroom;

