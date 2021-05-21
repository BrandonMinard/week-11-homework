
const path = require('path');

module.exports = (app) => {
    // app.get('*', (req, res) => {
    //     console.log("something")
    //     res.sendFile(path.join(__dirname, '../public/index.html'));
    // });
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    //what the heck
    app.get('/assets/js/index.js', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/assets/js/index.js'));
    });
}