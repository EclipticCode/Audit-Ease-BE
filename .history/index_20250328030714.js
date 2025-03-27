const express = require('express')
const cors = require ("cors")
const bodyParser  = require ('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

app.get('/')
app.listen(4000, () => {
    console.log("Server started at port 4000")
})