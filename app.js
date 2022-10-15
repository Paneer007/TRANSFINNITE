require('dotenv').config()

const express = require('express');
const res = require('express/lib/response');
const app = express();

app.set('view engine','ejs');
app.use(express.static("public"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.render('post');
})



app.post('/',(req,res)=>{
    let person= '';
    //from the postman
    if(req.query.name){
        person = {
            name :req.query.name,
            age: req.query.age,
            localArea : req.query.localArea,
            city : req.query.city,
            state : req.query.state,
            voterID :req.query.voterID,
            gender :req.query.gender
        }
    }
    //if from the get req
    if(req.body.name){
        person = {
            name :req.body.name,
            age: req.body.age,
            localArea : req.body.localArea,
            city : req.body.city,
            state : req.body.state,
            voterID :req.body.voterID,
            gender :req.body.gender
        }
    }

    console.log(person)

    res.send('done posting');


})


//export funciton from login from sanjai
//input from 

//epic id list and state name to flask for state




const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log('server started on port '+PORT);
})

