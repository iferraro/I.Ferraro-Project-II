const Contributor = require("../models/contributor");
const Post = require("../models/post");
module.exports = {
    show,
    new: newPost,
    create,
    addRating,
    delete: deletePost,
    edit
}

async function show(req, res) {
    try {
        const contribId = req.params.id;
        const particularContrib = await Contributor.findById(contribId);
        const contribPosts = await Post.find({contributor: contribId}); // finds all posts made by this particular contributor
        res.render("profile", { tabTitle: particularContrib.name, heading: particularContrib.name, contribPosts }); // show work of particular contributor
    } catch (err) {
        res.send(err); // if id is not that of a contributor, then error
    }
}

function newPost(req, res) {
    if (req.user) {
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

async function addRating(req, res) {
    if (req.user) {
        req.body.judge = req.user.name;
    } else {
        req.body.judge = "Anonymous";
    }
    console.log(req.body);
    const post = await Post.findById(req.params.id);
    post.ratings.push(req.body);
    post.save(function(err) {
        res.redirect('/home');
    });
}

async function deletePost(req, res) {
    console.log(req.params.ie);
    try {
        const foundPost = await Post.findByIdAndDelete(req.params.ie);
        console.log(foundPost);
        res.redirect(`/contributors/${req.user._id}`);
    } catch(err) {
        res.send(err);
    }
}

async function edit(req, res) {
    try {
        const foundPost = await Post.findById(req.params.ie);
        console.log(req.body);
        foundPost.date = req.body.date;
        foundPost.location = req.body.location;
        foundPost.camera = req.body.camera;
        foundPost.description = req.body.description;
        foundPost.save();
        console.log(foundPost);
        res.redirect(`/contributors/${req.user._id}`);
    } catch(err) {
        res.send(err);
    }
}
