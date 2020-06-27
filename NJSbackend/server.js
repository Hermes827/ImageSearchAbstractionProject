const express = require('express')
const MongoClient = require('mongodb').MongoClient
const BodyParser = require('body-parser')
const cors = require('cors');
const app = express()
const port = 8000;
const CONNECTION_URL = "mongodb+srv://chris:battery@cluster0-wtmz3.mongodb.net/chris?retryWrites=true&w=majority"
const DATABASE_NAME = "imageAbstractionStats";
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
let database, collection;
app.use(cors());

app.listen(port, () => {
  // console.log("hello")
  MongoClient.connect(CONNECTION_URL, {useNewUrlParser: true}, (error, client) => {
    if(error){
      throw error;
    }
    database = client.db(DATABASE_NAME)
    collection = database.collection('stats')
    console.log("Connected to `" + DATABASE_NAME + "`!");
  })
})

app.post("/stats", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

// app.get('/stats', (req, res) => { res.send('Hello')  })

app.get("/stats", (request, response) => {

   collection.find({}).toArray((error, result) => {
       if(error) {
           return response.status(500).send(error);
       }
       response.send(result);
   });

});
