const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const enrutamiento = require('./routes/enrutamiento')
const enrutamiento2 = require('./routes/enrutamiento2')

app.use('/api/v1', enrutamiento)
app.use('/api/v1',enrutamiento2)

const PORT = process.env.PORT || 9999;

app.listen(PORT, ()=>{
    console.log('Aplicacion en linea')
})