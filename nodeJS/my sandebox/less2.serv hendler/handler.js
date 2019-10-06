let i = 0;
function handler (req, res) {
    i += 1;
    res.end(i.toString());
}

module.exports = handler;