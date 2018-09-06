const express = require('express');
const js2xmlparser = require("js2xmlparser");
const app = express();

const fulfilled = {
    "datacash_reference": "4700200039506788",
    "merchantreference": "4700200039506788",
    "mode": "TEST",
    "reason": "FULFILLED OK",
    "status": "1",
    "time": "1073285919"
 };

 const failed = {
    "datacash_reference": "4700200039506788",
    "merchantreference": "4700200039506788",
    "mode": "TEST",
    "reason": "NOT FULFILLED OK",
    "status": "2",
    "time": "1073285919"
 };

app.get('/', (req, res) => res.send(js2xmlparser.parse('Response', fulfilled))),
app.get('/failed', (req, res) => res.send(js2xmlparser.parse('Response', failed))),
app.get('/timeout', (req, res) => {
    setTimeout(() => res.send(js2xmlparser.parse('Response', fulfilled)), 5000);
}),

app.get('/status500', (req, res) => {
    res.sendStatus(500);
}),

// app.use(express.static('public')),
// app.use('/success',express.static('success'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

