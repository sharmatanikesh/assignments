const express = require("express");
const router = express.Router();
const userMiddleware = require("../middleware/user");
const User = require("../db/index")
const {JWT_SECRET} = require("../config")

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
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

    const user  = await User.find({
        username:username,
        password :password
    })

    if(user){
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

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    const courses = User.find({

    })
    res.json({
        courses:courses
    })
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    
    const courseId = req.params.courseId
    try{
    await User.updateOne({
        username:req.username
    },{
        "$push":{
            purchasedCourses:courseId
        }
    })}catch(e){
        console.log(e)
    }
    
    res.json({
        message:"Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username:req.username
    })
    console.log(user.purchasedCourses)

    const courses = await User.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })

    res.json({
        courses : courses
    })
});


module.exports = router