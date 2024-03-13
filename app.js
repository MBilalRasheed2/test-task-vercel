require("dotenv").config();
const app = require('express')();
var http = require('http');
var cors = require('cors');
const bodyParser = require("body-parser");

const { dbConnection } = require('./connection')
const cardRoute = require('./routes/card.route');
const profileRoute = require('./routes/profile.route');
const statusRoute = require('./routes/status.route');
const authController = require('./routes/user.route')

const port = process.env.PORT || 8000
dbConnection()
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.status(200).send({ data: true })
});
// app.use('/dataenty', parserRoute);
app.use('/card', cardRoute);
app.use('/profile', profileRoute);
app.use('/status', statusRoute);
app.use('/user', authController);



const server = http.createServer(app);

server.listen(port, function () {
    console.log(`Server is running on ${port}`);
});