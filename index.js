const express = require('express');
const app = express();

const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(port, () => console.log(`Express web application is avaialble at localhost:${port}`));