const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = process.env.PORT;
import fetch from 'superagent';

app.use(cors());

API_URL = 'postgres://mukrixtxqkosfi:66be4f096756182eba49c28c7862dbe96dfb43d48cc9c1820d167cab0f9848d3@ec2-54-224-124-241.compute-1.amazonaws.com:5432/d3qirmhfvbulbi';

app.get('/', async (req, res) => {
    const returned_data = await fetch.get(API_URL);
    res.json(returned_data);

})

// app.get('/', (req, res) => {

//     res.json({ key: 'home', value: 'HOME!' })

// })

app.listen(port, () => {
    console.log(`server listening at port: ${port}`)
}
)