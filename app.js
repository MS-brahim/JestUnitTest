const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.json());

const userRoute = require('./routes/userRoute')
app.use('/user', userRoute);


mongoose.connect(process.env.DB_CONNECT, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true}, ()=>{
    console.log("Connect DB success");
})
app.listen(3000);

module.exports = app;

// function hello() {
//     return 'hello word'
// }
// module.exports = hello;