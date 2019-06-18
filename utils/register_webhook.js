var request = require('request');
require("dotenv").config();
var options = {
    url: `https://api.trello.com/1/webhooks/?key=${process.env.TRELLO_KEY}&token=${process.env.TRELLO_TOKEN}&idModel=5d078b544a896b7274c67d0e&description=testing webhook&callbackURL=https://c874533d.ngrok.io`,
    method: 'POST'
};

function callback(error, response, body) {
    console.log(response)
    if (!error && response.statusCode == 200) {
        console.log(body);
    } else {
        console.log("Hello")
    }
}

request(options, callback);
