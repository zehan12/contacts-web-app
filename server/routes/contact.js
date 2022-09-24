const express = require("express");

const router = express();

router.get("/create",(req,res,next)=>{
    console.log(req.body)
    console.log("create User")
})


module.exports  = router;