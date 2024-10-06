const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://gray-ocean-05256d010.5.azurestaticapps.net/'
}));

app.get('/roll-dice', (req, res) => {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    res.json({ die1, die2 });
});

app.get('/roll-dice-fail', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ message: 'CORS should fail here!' });
});

app.get('/api/ping', (req, res) => {
    res.send('pong');
});

app.listen(port, () => {
    console.log('Server running...');
});