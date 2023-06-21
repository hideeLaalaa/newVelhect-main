/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {}

module.exports = nextConfig

module.exports = {
    /* Add Your Scss File Folder Path Here */
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}