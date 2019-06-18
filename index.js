const http = require("http");
const get_cards_status = require('./utils/get_all_cards_status.js');
var cron = require('node-cron');

http.createServer((req, res) => {
    if (req.method === "HEAD") {
        console.log("Okay");
    }
    if (req.method === "POST") {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            let data = JSON.parse(body);
            try {
                console.log(`${data.action.type} "${data.action.data.card.name}" with "labeltext" "${data.action.data.text}" and label color "${data.action.data.value}"`);
                get_cards_status();
            } catch (e) {
                console.log(data.action.type)
            }
            res.end('ok');
        });
    }
    // make the request every oneminute

}).listen(3000, () => {
    console.log("The server is running on port 3000");
})
cron.schedule('*/1 * * * *', () => {
    get_cards_status();
});