const Contributor = require('../models/contributor');
module.exports = {
    show
};

async function show(req, res) {
    const contributors = await Contributor.find({});
    res.render("contributors", { tabTitle: "Contributors", heading: "Contributors", contributors });
}

