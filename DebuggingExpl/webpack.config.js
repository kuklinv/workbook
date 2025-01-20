const path = require('path');
module.exports = {
    mode: 'production', // Enables optimizations like minification and tree-shaking
    entry: './src/index.js', // Specifies the entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'),// Defines the output directory for bundled files
        filename: 'bundle.js',// Specifies the name of the bundled file
    },
};
