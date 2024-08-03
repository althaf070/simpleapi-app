const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js')

require('dotenv').config();

const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use(cors())

mongoose.connect(process.env.DB_URL)
.then(() => console.log("connected to db"))
.catch(err => console.log("error connecting to db",err))


app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
    
})

// routes
app.use("/api/products",productRoute)

app.get('/', (req,res)=>{
    res.send("hello world from here")
})


