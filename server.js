const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/intersectionObserver.html");
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});

app.use(express.static('public'));