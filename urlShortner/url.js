const shortid = require("shortid");
const URL = require("../models/url");
async function handleGenerateShortaURL(req,res){
    const shortId = shortid();
    const body = req.body;
    if(!body.url) return res.status(400).json({"error":"Bad request"});
    await URL.create({
        shortId : shortId,
        redirectURL:body.url,
        visitHistory : [],
    })
    
    return res.json({id : shortId});
}

module.exports = {
    handleGenerateShortaURL,
}