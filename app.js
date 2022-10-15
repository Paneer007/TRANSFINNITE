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
            ...req.query,
            epicID: undefined,
        }
    }
    //if from the get req
    if(req.body.name){
        person = {
            ...req.body,
            epicID: undefined,
        }
    }

    console.log(person)

    res.send('done posting');


})

app.use('/',)
//export funciton from login from sanjai
//input from 

//epic id list and state name to flask for state




const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log('server started on port '+PORT);
})

