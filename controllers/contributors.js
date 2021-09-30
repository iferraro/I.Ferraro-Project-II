const User = require('../models/user');

module.exports = {
    show
};

async function show(req, res) {
    const contributors = await User.find({});
    res.render("contributors", { tabTitle: "Contributors", heading: "List of Contributors", contributors });
}

