const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!');
    res.json('ping')
    res.status(403).json({ error: 'Method unauthorized' });
    res.status(200).json({ error: 'Ping OK' });
})


app.listen(3001, function () {
    console.log('Example app listening on port 3001!')
})