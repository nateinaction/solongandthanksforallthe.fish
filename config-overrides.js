const {override} = require('customize-cra');
const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");

const cspConfigPolicy = {
    'default-src': "'none'",
    'img-src': ["'self'", "https://*.redditmedia.com"],
    'style-src': ["'self'"],
    'script-src': ["'self'", "https://ajax.cloudflare.com", "https://static.cloudflareinsights.com"],
    'connect-src': ["'self'", "ws://*", "https://www.reddit.com"],
    'manifest-src': ["'self'"]
};

const cspAdditionalOpts = {
    nonceEnabled: {
        'script-src': false,
        'style-src': false,
      }
}

function addCspHtmlWebpackPlugin(config) {
    config.plugins.push(new CspHtmlWebpackPlugin(cspConfigPolicy, cspAdditionalOpts));
    return config;
}

module.exports = {
    webpack: override(addCspHtmlWebpackPlugin),
};
