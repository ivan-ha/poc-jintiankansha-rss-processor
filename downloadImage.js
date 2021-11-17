const fs = require('fs');
const Axios = require('axios')

async function downloadImage(url, filepath, filename, callback) {
    const response = await Axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });

    // create the directory
    fs.mkdirSync(filepath, { recursive: true } );

    return new Promise((resolve, reject) => {
        response.data
            .pipe(fs.createWriteStream(`${filepath}/${filename}`))
            .on('error', reject)
            .on('close', callback);
    });
}

module.exports = { downloadImage }
