const connectToMongo = require('./db.js');
const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');
const { route } = require('./routes/tads_user.js');
const { Http2ServerRequest } = require('http2');
const SMTPPool = require('nodemailer/lib/smtp-pool/index.js');
connectToMongo();

app.use(express.json());
app.use(cors())

const port = 8000;

// http://localhost:8000/user/
app.get('/test', (req, res) => { res.send("Test API11")})
app.use('/user', require('./routes/tads_user.js'));
app.use('/riddle', require('./routes/tads_riddles.js'));

app.listen(port, () => {
    console.log(`TAdS VCT listening at http://localhost:${port}`)
})