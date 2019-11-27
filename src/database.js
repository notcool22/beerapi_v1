const mongoose = require('mongoose');

const URI = "mongodb+srv://lrmendoza:luisroberto@cluster0-8xh0p.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(URI, {
    useNewUrlParser:true,
    useCreateIndex:true
});

// const connection = mongoose.connection;
/*
connection.once('open', ()=> {
    console.log('DB is connected')
});

/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://lrmendoza:luisroberto@cluster0-8xh0p.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,useCreateIndex:true});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/