const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8888 
app.use(express.urlencoded({extended: true}));

app.use('/', (req, res) => {res.send('Server onnn')})
app.listen(port, () => {
    console.log('Server listening on:' + port);
})