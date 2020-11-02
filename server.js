const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = process.env.PORT;

app.use(cors());

app.get('/greeting', (req, res) => {

    res.send({ key: 'greeting', value: 'HI!' })

})

app.get('/', (req, res) => {

    res.send({ key: 'home', value: 'HOME!' })

})

app.listen(port, () => {
    console.log(`server listening at port: ${port}`)
}
)