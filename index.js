require('dotenv').config()

const axios = require('axios')
const cheerio = require('cheerio')

(async () => {
    const rss = await axios.get(process.env.RSS_FEED)
    console.log(rss)
})()
