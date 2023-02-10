
const express = require ('express'); 
const categorie = require('../models/categorie');
const router =express.Router();
const Categorie = require("../models/categorie");
router.get("/", async(req,res)=>
 {

})


router.post("/" , async (req,res)=> {  
 const{nomcategorie,imagecategorie} = req.body
  const cat1 = new Categorie({nomcategorie:nomcategorie , imagecategorie:imagecategorie})
  
  try{ 
    await cat1.save();
    res.status(200).json(cat1) } 
    catch(error) { 
        res.status(404).json({message:error.message}) ;

    }

})
router.put("/" , async(req,res)=> { 

})
router.delete("/" , async(req,res) => { 

})
module.exports = router