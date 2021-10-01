const User = require("../models/user");
module.exports = {
    show,
    new: newPost,
    create
}

async function show(req, res) {
    console.log(req.params.id); // if id is not the name of a contributor, then redirect
    const particularUsers = await User.find({name: req.params.id});
    console.log(particularUsers);
    if (particularUsers.length === 0) {
        res.redirect("/contributors");
    }
    else {
        res.render("profile", {tabTitle: req.params.id, heading: req.params.id});
    }
}

function newPost(req, res) {
    console.log(req.user);
    const contribId = req.params.id;
    if (req.user) { // if guest viewer tries to access /new, it will redirect them to contributors page
        res.render("posts/new", {tabTitle: "New Post", heading: "Add Something New to the Site", contribId});
    }
    else {
        res.redirect("/contributors");
    }
}

function create(req, res) {
    console.log(req.body);
}


