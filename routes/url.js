// Import Express
const express = require('express')

// Create Router
const router = express.Router()

router.get('/', (req,res) => {
    res.render('pages/index', {title: 'Home'})
    // res.send('<h1>testestset</h1>')
})

router.get('/keycap', (req,res) => {
    res.render('pages/keycap',{title: 'Keycaps'})
})

module.exports = router