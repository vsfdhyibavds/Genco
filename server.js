const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const expressLayout=require('express-layout')
const db = require('./server/db/db');

app.use(bodyParser.json())


const PORT=3000
app.use(express.static('public'))


  // Connect to the database
db()



app.use(express.urlencoded({ extended:false }))
app.use(bodyParser.urlencoded({ extended:false}))


app.use(expressLayout.apply())
app.set('layout', './layout/main')
app.set('view engine', 'ejs')

// app.use('/',require('./server/routes/main'))
app.use('/', require('./server/routes/main'))

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})


