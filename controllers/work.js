const Contributor = require("../models/contributor");
const Post = require("../models/post");
module.exports = {
    show,
    new: newPost,
    create
}

async function show(req, res) {
    try {
        const contribId = req.params.id;
        // console.log(contribId);
        const particularContrib = await Contributor.findById(contribId);
        // console.log(particularContrib);
        const contribPosts = await Post.find({contributor: contribId}); // finds all posts made by this particular contributor
        // console.log(contribPosts);
        res.render("profile", { tabTitle: particularContrib.name, heading: particularContrib.name, contribPosts }); // show work of particular contributor
    } catch (err) {
        res.send(err); // if id is not that of a contributor, then error
    }
}

function newPost(req, res) {
    if (req.user) {
        console.log(req.user);
        res.render("posts/new", { tabTitle: "New Post", heading: "Add Something New to the Site", contribId: req.user._id });
    } else {
        res.redirect(`/contributors/${req.params.id}`);
    }
}

async function create(req, res) {
    req.body.contributor = req.user._id;
    const newPost = await Post.create(req.body);
    console.log(newPost);
    res.redirect(`/contributors/${req.user._id}`);
}


