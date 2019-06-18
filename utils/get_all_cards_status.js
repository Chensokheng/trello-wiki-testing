const request = require("request");


module.exports = function () {


    var options = {
        url: `https://api.trello.com/1/boards/yOUhnc4k/cards/?fields=name,labels&key=${process.env.TRELLO_KEY}&token=${process.env.TRELLO_TOKEN}`
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            console.log("----------------------------------------------------------------------");
            for (let i in data) {
                let cards_label = [];
                data[i].labels.map(label => cards_label.push([label.name, label.color]));
                console.log("card " + '"' + data[i].name + '"' + ' label => ' + cards_label);
            }
            console.log("----------------------------------------------------------------------");
        } else {
            console.log("something we wrong");
        }
    }

    request(options, callback);
}