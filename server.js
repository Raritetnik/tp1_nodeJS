const express = require("express");
const path = require('path')
const App = express();

const fs = require('fs');
const request = require('request');
const { URL_GAMES, URL_PLATFORMS, PORT, API_KEY } = require('./config.js')

loadDB(URL_GAMES, 'games');
loadDB(URL_PLATFORMS, 'platforms');
async function loadDB(urlAPI, title) {
    request.get({
        url: urlAPI+API_KEY,
        json: true,
        headers: {'User-Agent': 'request'}
        }, (err, res, data) => {
            if (err) {
                console.log('Database load: Error:', err)
            } else if (res.statusCode !== 200) {
                console.log('Database load: Status:', res.statusCode)
            } else {
                // data is successfully parsed as a JSON object:
                //console.log(data)
                var newData = JSON.stringify(data)
                fs.writeFile('./front-end/static/db/'+title+'.json', newData, err => {
                if(err) throw err;
                console.log("Database load: Success");
            })
        }
    })
}

App.use('/static', express.static(path.resolve(__dirname, 'front-end', 'static')))

App.get("/*", function(req, res) {
    res.sendFile(path.resolve(__dirname, 'front-end', 'index.html'));
});


const server = App.listen(PORT || 8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Connecte',host, port);
})