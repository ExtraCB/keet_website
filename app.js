// Import Express
const express = require('express')

// Import EJS Layout
const expressLayouts = require('express-ejs-layouts')

// Import Router
const urlRouter = require('./routes/url')

// Create express object
const app = express()

// กำหนด Folder สำหรับบอกตัว express ว่าไฟล์ css, images อยู่ path ไหน
app.use(express.static('assets'))

// // // กำหนด Template Engine
app.use(expressLayouts)
app.set('layout','./layouts/main')
app.set('view engine', 'ejs')

// เรียกใช้งาน Router
app.use('', urlRouter)

// Run express server
app.listen(3000, ()=> {
    console.log('Listening to port 3000')
})