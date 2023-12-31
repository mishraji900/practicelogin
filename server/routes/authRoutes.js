const express = require('express')
const router = express.Router()
const cors = require('cors')
const {test,registerUser,loginUser,getProfile} = require('../controllers/authControllers')

//middle ware
router.use(
    cors({credentials: true,
    origin: 'http://localhost:3000'
})
)
router.post('/',loginUser)

router.get('/profile',getProfile)

router.post('/register',registerUser)

module.exports =router