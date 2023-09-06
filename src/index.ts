import express from 'express';

const app = express();
app.listen(4000, () => {
    console.log('server running on port 4000');
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/:name', (req, res) => {
    res.send('Hello, ' + req.param("name") + '!');
});
