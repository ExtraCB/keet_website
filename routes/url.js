// Import Express
const express = require("express");

// Create Router
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/index", { title: "Home - KEET" })
  // res.send('<h1>testestset</h1>')
});

router.get("/keycap", (req, res) => {
  res.render("pages/products/keycap", { title: "Keycaps - KEET" })
});

router.get("/switch", (req, res) => {
  res.render("pages/products/switch", { title: "Switches - KEET" })
});

router.get("/diy",(req,res) => {
    res.render("pages/products/diy_kit",{title:'DIY KIT - KEET'})
})
router.get("/Accessories",(req,res) => {
    res.render("pages/products/accessories",{title:'Accessories - KEET'})
})
module.exports = router;
