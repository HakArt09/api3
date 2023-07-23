const express = require('express')
const app = express()
const port = process.env.port || 5001;
const mongoose = require('mongoose')
const mongoUrl = 'mongodb+srv://kdownload09:rvUCxOrLR0EMbJFK@cluster0.zucj5tz.mongodb.net/tahucrispy?retryWrites=true&w=majority'
const cors = require('cors')
const path = require('path');
const { title } = require('process');

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Berhasil Connect Ke Database')
}).catch((e) => {
    console.log(e)
    console.log('Gagal Connect Ke Database')
})

app.get('/', (req, res) => {
    res.send({title: "hallo"})
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const directory = path.join(__dirname, '/static/')
app.use(express.static(directory))

app.use('/user', require('./routes/user'))
app.use('/menu', require('./routes/menu'))
app.use('/transaksi', require('./routes/transaksi'))

app.listen(5001, () => {
    console.log('Berhasil Jalan')
})