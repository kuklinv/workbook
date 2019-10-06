let phrases;
exports.connect = function () {
    phrases  = require('./ru.json');
};

exports.getPhrase = function (name) {
    if (!phrases[name]) {
        throw new Error('Have not this' + name);
    }
    return phrases[name];
};