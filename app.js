const express = require('express');
const app = express();

app.listen(8080, (error) => {
    if (error) {
        throw error;
    }
    console.log('My first express app is currently listening to port number 8080 and is running at http://localhost:8080/');
});

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname});
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname});
})

app.get('/contact-me', (req, res) => {
    res.sendFile('./views/contact-me.html', {root: __dirname});
})

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
})