const express=require('express')
const app=express()
const cors=require('cors')
const parser=require('body-parser')

app.use(cors());
app.use(parser.json())
const PORT=8000
app.listen(PORT,console.log("Server start in port "+PORT))


app.use('/users',require('./middlewares/posts'))
app.use('/report',require('./middlewares/report'))