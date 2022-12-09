const express = require('express');
const path = require('path');
const data = require(path.join(__dirname, 'data.json'));
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.join(__dirname, 'assets')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => res.render('main',data));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));