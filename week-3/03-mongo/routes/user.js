const express = require("express");
const router = express.Router();
const userMiddleware = require("../middleware/user");
const {User}= require("../db/index")

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username 
    const password = req.body.password 

    User.create({
        username:username,
        password :password 
    })

    res.json({
        message:"User created successfully"
    })
});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic

    const response = await User.find({})

    res.json({
        message:response
    })


    
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic

    const username = req.headers.username 
    const courseId = req.params.courseId
    try{
    await User.updateOne({
        username:username
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
        username:req.headers.username
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


module.exports = router;