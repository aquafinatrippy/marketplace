//imports
const express = require('express')
require('dotenv').config()


const app = express()

app.get('/', (req, res) => {
    res.send("Hellor world")
})



app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
})