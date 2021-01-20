// Yargs config

const location = {
    demand: true,
    alias: 'l',
    desc: 'Location of city for get the weather.'
}

const argv = require('yargs')
    .options({
        location
    })
    .help()
    .argv;

module.exports = { argv }