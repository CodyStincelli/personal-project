const express = require('express')
      bodyParser = require('body-parser')
      cors = require('cors')
      axios = require('axios')

const app = express();
const baseURL = 'http://dnd5eapi.co/api/'

app.use( bodyParser() );
app.use( cors() );


const port = 3005;
app.listen(port, () => { console.log(`Rolling stats on port ${port}`)
})