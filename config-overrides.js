const {override} = require('customize-cra');
const cspHtmlWebpackPlugin = require("csp-html-webpack-plugin");

const cspConfigPolicy = {
    'default-src': "'none'",
    'img-src': ["'self'", "https://*.redditmedia.com"],
    'style-src': ["'self'"],
    'script-src': ["'self'", "https://ajax.cloudflare.com", "https://static.cloudflareinsights.com"],
    'connect-src': ["'self'", "ws://*", "https://www.reddit.com"]
};

function addCspHtmlWebpackPlugin(config) {
    if(process.env.NODE_ENV === 'production') {
        config.plugins.push(new cspHtmlWebpackPlugin(cspConfigPolicy));
    }

    return config;
}

module.exports = {
    webpack: override(addCspHtmlWebpackPlugin),
};
