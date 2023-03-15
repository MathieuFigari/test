require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors('*'));

// On spécifie une limite de taille de body
// une clé redis peut pesée jusqu'à 600MB
// Un document MongoDB sera limité à 16MB
app.use(express.json({ extended: false, limit: '16mb' }));

const router = require('./app/routers');

// Middleware
app.use(router);

// Je n'ai pas de 404 : il faut faire une route

app.set('base_url', process.env.BASE_URL);
app.set('port', process.env.PORT);

app.listen(app.get('port'), _ => {
    console.log(`${app.get('base_url')}:${app.get('port')}`);
});
