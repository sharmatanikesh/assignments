const express= require("express");
const adminMiddleware = require("../middleware/admin");
const router =express.Router();
const{ Admin,Course} = require("../db/index")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    const username = req.body.username 
    const password = req.body.password 

    const admin = await Admin.create({
        username:username,
        password:password 
    })

    if(admin){
        res.json({
            message:"Admin created successfully"
        })
    }

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username 
    const password = req.body.password 

    const admin  = await Admin.find({
        username:username,
        password :password
    })

    if(admin){
        const token =jwt.sign({
            username
        },JWT_SECRET)

        res.json({
            token
        })

    }else{
        res.status(411).json({
            msg: "Incorrect email and password"
        })
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    const title =req.body.title 
    const description = req.body.description
    const price = req.body.price 
    const imageLink = req.body.imageLink

    const new_courses = await Course.create({
        title:title,
        description: description,
        price:price,
        imageLink :imageLink
    })

    res.json({
        message:`Course created successfully new course Id : ${new_courses._id}`
    })
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const response = await Admin.find({})

    res.json({
        message:response
    })
});

module.exports = router;