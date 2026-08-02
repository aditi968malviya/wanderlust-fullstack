const express=require("express");
const router=express.Router();


//posts
//index
router.get("/",(req,res)=>{
    res.send("GET for post");
})

//show-users
router.get("/:id",(req,res)=>{
    res.send("GET for show post");
})

//post-users
router.post("/",(req,res)=>{
    res.send("POST for post");
})

//DELETE -users
router.delete("/:id",(req,res)=>{
    res.send("DELETE for post id");
})

module.exports=router;
