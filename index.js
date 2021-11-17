require('dotenv').config()

const cheerio = require('cheerio')
const fs = require('fs')
const Parser = require('rss-parser')
const { downloadImage } = require('./downloadImage')

const parser = new Parser();

(async () => {
    const feed = await parser.parseURL(process.env.RSS_FEED)

    feed.items.forEach(item => {
        const $ = cheerio.load(item.content)
        const text = $('div').text().trim()

        console.log("Title:", item.title)
        console.log("Content:", text)

        try {
            $('img').map(async (i, e) => {
                // bypass jintiankansha image proxy
                const imgSrc = $(e).attr('src').replace(/(http:\/\/img2\.jintiankansha\.me\/get\?src=)/, '')

                await downloadImage(imgSrc, `images/${item.title}`, `${i}.jpg`,() => {
                    // do nothing
                })
            })
        } catch (error) {
            // console.error(error)
        }

        console.log('\n')
    })
})()
