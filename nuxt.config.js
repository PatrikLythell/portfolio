module.exports = {
    build: {
        extend (config, { isClient }) {
            // Extend only webpack config for client-bundle
            config.module.rules.push({
                test: /\.md$/,
                use: 'markdown-with-front-matter-loader'
            })
        }
    } 
}