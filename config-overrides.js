const path = require('path');

function resolve(dir) {
    return path.join(__dirname, '.', dir);
}

/* config-overrides.js */
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    // alias
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': resolve('src'),
        '@component': resolve('src/components'),
        '@page': resolve('src/page'),
        '@common': resolve('src/common'),
        '@style': resolve('src/styles'),
        '@image': resolve('src/images')
    };
    config.resolve.extensions = ['.js', '.jsx', '.json'];
    return config;
};
