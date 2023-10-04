/** @type {import('postcss-load-config').Config} */
module.exports = {
    plugins: [
        require('postcss-nested'),
        require("tailwindcss"),
        require("autoprefixer")
    ],
}