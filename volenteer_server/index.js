const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const ObjectId = require('mongodb').ObjectId;
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Nahidul37003:Sylhetinthebd@cluster0.d8lte.mongodb.net/Nahidul37003?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
client.connect(err => {
  const collection = client.db("Volentier").collection("Category");
app.delete('/delete/:id',(req,res)=>{
  const id=req.query.params;
  collection.deleteOne({_id: ObjectId(req.params.id)})
  .then(result=>{
  
  result.send(true)
  })

})
app.delete('/deleteuser/:id',(req,res)=>{
  const id=req.query.params;
  collection.deleteOne({_id: ObjectId(req.params.id)})
  .then(result=>{
  
   res.redirect('http://localhost:3000/admin')
  })

})
   app.patch('/update/:id',(req,res)=>{
    console.log(req.body.price)
   collection.updateOne({_id: ObjectId(req.params.id)},
   {
     $set: {price: req.body.price, quaintity: req.body.quaintity}
   })
   .then(res=>{
    res.redirect('http://localhost:3000/Profile')
   })
  })
 app.get("/Profile",(req,res)=>{
  console.log(req.query.email)
  collection.find({email: req.query.email})
   .toArray((err,document)=>{
     res.send(document)
   })
 })
 app.get("/Admin",(req,res)=>{
  
  collection.find({})
   .toArray((err,document)=>{
     res.send(document)
   })
 })
  app.get("/update/:id",(req,res)=>{
    collection.find({_id: ObjectId(req.params.id)})
    .toArray((err,document)=>{
      res.send(document[0])
    })
  })
  app.post("/add", (req,res)=>{
    const product = req.body;
    console.log(product);
    collection.insertOne(product)
    .then(result=>{
     res.redirect('http://localhost:3000/Added')
    })
  })
});


app.listen(5000);