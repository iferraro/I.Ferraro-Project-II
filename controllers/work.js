const User = require("../models/user");

module.exports = {
    show
}

function show(req, res) {
    console.log(req.params.id);
    res.render("profile", {tabTitle: req.params.id, heading: req.params.id});
}