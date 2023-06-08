const express = require("express");
const router = express.Router();
  const bcrypt = require("bcryptjs");
  const jwt = require("jsonwebtoken");
require("../db/database");
router.use(express.static("../client/src/"));
const User = require("../model/userSchema");
router.post("/reg-user",async  (req, res) => {
    try {
        console.log('Signup')
        const emailExist =await User.findOne({email:req.body.email});
        if(emailExist)
         return res.status(422).json({ error: " !Email already exist!" })   // error show 422
        const entry = new User({                   
          firstname: req.body.firstName,   //key value
          lastname: req.body.lastName,
          email: req.body.email,
          password : req.body.password
          
          
         });
        
        const data = await  entry.save ();
        if(data)
         return res.status(201).json({ message: "user registered successfully !!" })
        console.log(req.body.firstName)   //f=b
    } catch (error) {
     console.log(error)   
    }
})    //async=await
router.post("/reg-loginuser",async  (req, res) => {
  try {
    console.log('Signup')
    console.log (req.body)
    console.log (req.body.password)
    
    const userExist =await User.findOne({email:req.body.username});
    if(!userExist)
     return res.status(422).json({ error: " !user does not exist!" })   // error show 422
     token = await userExist.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      
      const isMatch = await bcrypt.compare(req.body.password, userExist.password);
      //third validation - password matching
      if (!isMatch) {
        res.status(400).json({ error: "Incorrect Password" });
      } else {
        res.status(200).json({ message: "Login Successful" });
      }



    
    // if(data)
    //  return res.status(201).json({ message: "user registered successfully !!" })
      //f=b
} catch (error) {
 console.log(error)   
}

});

module.exports = router; 

//post add in db
//get fetch ib db
