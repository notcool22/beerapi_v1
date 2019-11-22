const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI :'mongodb+srv://lrmendoza@cicese.edu.mx:mendoza260695@cluster0-8xh0p.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(URI, {
    useNewUrlParser:true,
    useCreateIndex:true
});
const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log('DB is connected')
});