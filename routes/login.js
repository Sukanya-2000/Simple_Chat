const express = require('express')
const router = express.Router();

router.use('/login' , (req , res ,next)=>{
    console.log("In login")
    const submitHandler=(event)=>{
        event.preventDefault();
        localStorage.setItem(`username`,document.getElementById(`username`).value)
        console.log("Sukanya")
    }
    res.send('<form onSubmit="localStorage.setItem(`username`,document.getElementById(`username`).value) "  action="/add-message" method="POST"><input id="username" type="text" name="username" /><button type="submit">Add </button></form>')
})


module.exports = router 