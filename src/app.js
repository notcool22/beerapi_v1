const express =require('express');
const cors =require('cors');
const app = express();

//settings
app.set('port',process.env.PORT || 4000)


//middlewares
app.use(cors());
app.use (express.json());



//routes
app.use('/inventory',require('./routes/inventory') )
app.use('/brewery' ,require('./routes/brewery'))
app.use('/style' ,require('./routes/style'))
module.exports = app;