const mongoose = require('mongoose');

const mushroomSchema =  mongoose.Schema({ 
    id:{
        type:String
    },                  
    name:{
        type:String,
        required:true
    },                
    location:{
        type:String,
        required:true,
    },            
    rarity:{
        type:String,
        required:true
    },              
    effects:{
        type:[String],
    },           
    discovered_by: String        
});

const mushroom = mongoose.model("Mushroom",mushroomSchema);

module.exports = mushroom;

