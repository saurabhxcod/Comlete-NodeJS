import { Url } from "../Models/URL.model.js"
import shortid from 'shortid'
export const shortURL = async (req, res) => {
    const longURL = req.body.longURL;
    const shortCode = shortid.generate()
    const shortURL = `http://localhost:3000/${shortCode}`

    // save to database
    const newURL = new Url({ shortCode, longURL })
    await newURL.save()
    // console.log(newURL);
    res.render("index.ejs", { shortURL })
}

export const getOriginalUrl = async (req, res) => {
    const shortCode = req.params.shortCode;
    // find on database
    const originalUrl = await Url.findOne({ shortCode })

    if (originalUrl) {
        res.redirect(originalUrl.longURL);
    } else {

        res.json({ message: "Invalid shortcode" });
    }
}