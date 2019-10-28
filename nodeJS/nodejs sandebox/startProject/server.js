let User = require('./user');

function run() {
    let Vasya = new User('Vasya');
    let Petya = new User('Petya');
    Vasya.hello(Petya);
}

if (module.parent) {
    exports.run = run();
} else {
    run();
}
