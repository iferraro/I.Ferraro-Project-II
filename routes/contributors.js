var router = require('express').Router();
const passport = require('passport');
const contribCtrl = require("../controllers/contributors");
const workCtrl = require("../controllers/work")
router.get('/', contribCtrl.show);
router.get("/:id", workCtrl.show);
router.get("/:id/new", workCtrl.new);
router.post("/:id", workCtrl.create);
module.exports = router;