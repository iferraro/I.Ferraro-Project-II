var router = require('express').Router();
const contribCtrl = require("../controllers/contributors");
const workCtrl = require("../controllers/work")
router.get('/', contribCtrl.show);
router.get("/:id", workCtrl.show);
router.get("/:id/new", workCtrl.new);
router.post("/:id", workCtrl.create);
router.put("/:id/:ie", workCtrl.edit);
router.delete("/:id/:ie", workCtrl.delete);
module.exports = router;