var router = require('express').Router();
const homeCtrl = require("../controllers/home");

router.get("/home", homeCtrl.index);

module.exports = router;

