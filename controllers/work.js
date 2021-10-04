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
        console.log(contribId);
        const particularContrib = await Contributor.findById(contribId);
        console.log(particularContrib);
        const contribPosts = await Post.find({contributor: contribId}); // finds all posts made by this particular contributors
        console.log(contribPosts);
        res.render("profile", { tabTitle: particularContrib.name, heading: particularContrib.name, contribPosts }); // show work of particular contributor
    } catch (err) {
        res.send(err); // if id is not that of a contributor, then error
    }
}

function newPost(req, res) {
    if (req.user) {
        console.log(req.user);
        const contribId = req.params.id;
        res.render("posts/new", { tabTitle: "New Post", heading: "Add Something New to the Site", contribId });
    } else {
        res.redirect(`/contributors/${contribId}`);
    }
}

async function create(req, res) {
    const newPost = await Post.create(req.body);
    newPost.contributor = req.user._id;
    console.log(newPost);
    res.redirect(`/contributors/${req.user._id}`);
}


