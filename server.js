const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const getUsersDynamo = require('./api/getCredentials/index.js');

// Enables all CORS requests
app.use(cors());

app.get('/users', function (req, res) {
    return res.send(getUsersDynamo());
});


// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'src', 'index.html'));
// });

app.listen(process.env.PORT || 8080);