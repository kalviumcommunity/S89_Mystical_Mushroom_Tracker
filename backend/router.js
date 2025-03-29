const express = require("express");
const mushroom = require("./schema");
const router = express.Router()

router.post("/postmushroom",async(req,res)=>{
    try {
        const{id,name,location,rarity,effects,discovered_by} = req.body;
        if(!name || !location || !rarity){
            res.status(401).send({msg:"Please provide all fields which are required......."});
        }
        const data = new mushroom({id,name,location,rarity,effects,discovered_by})
        await data.save();
        res.status(200).send({msg:"Mushroom posted successfully....",data})
    } catch (error) {
        res.status(500).send({msg:"Something went wrong while posting mushrooms.......",error});
        
    }
})

router.get("/getmushroom",async(req,res)=>{
    try {
        const mushrooms = await mushroom.find();
        res.status(200).send(mushrooms);
    } catch (error) {
        res.status(500).send({msg:"Something went wrong while getting mushrooms...."});
    }
})

router.put("/updatemushroom/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        console.log(id)
        if(!id){
            return res.status(401).send({msg:"Please provide id......"});
        }

        const {name,location,rarity,effects,discovered_by} = req.body;
        if(!name || !location || !rarity){
            return res.status(401).send({msg:"Please provide all details......"});
        }

        const update = await mushroom.findOneAndUpdate({id,name,location,rarity,effects,discovered_by});
        return res.status(200).send({msg:"Mushroom details are sucessfully updated....",update});

    } catch (error) {
        return res.status(500).send({msg:"Something went wrong while updating mushroom details......",error});  
    }
})

router.delete("/deletemushroom/:id",async(req,res)=>{
    try {
    
        const mushDeleted = await mushroom.findByIdAndDelete(req.params.id);

        res.status(200).send({msg:"Mushroom deleted successfully....."});
    } catch (error) {
        res.status(500).send({msg:"Something went wrong while deleting mushroom details......",error});
    }
})

module.exports = router;