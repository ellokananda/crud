const express = require('express')
const app = express()
const db = require('./config')

//endpoint pesawat
const pesawat = require('./route/pesawat')
app.use("/pesawat", pesawat)
app.listen(2001, () => {
    console.log("server run on port 2000")
})

const pegawai = require('./route/pegawai')
app.use("/pegawai", pegawai)
app.listen(2000, () => {
    console.log("server run on port 2000")
})