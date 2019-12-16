console.log("hello");
var express = require('express');

var app = express();
app.use(function(req,res,next){
    console.log("this is middle"+req.middleware)
    next();
})
app.use(function(req,res,next){
    req.middleware='second'
    console.log("This is middleware"+req.middleware)

    next();
})
app.use(express.json());
app.get('/',function(req,res){

    res.send("Hello World!");

});

app.listen(3000,function(error){

    if(error)
    {
        console.log("Error occured on start",error);
    }
    console.log("Node application has successfully started on http://localhost:3000");

});

app.get('/me',function(req,res){

    console.log(res.send("<h1> Pari Shah </h1>"+req.middleware));

});

app.get('/mequerystring',function(req,res){
    var query=req.query;
    res.send(query.name)
    //console.log(res.send("<h1> Pari Shah </h1>"+req.middleware));

});
app.get('/json',function(req,res){
    var myval = {"Name":"Parita"};
    res.json({"Age":"20"});

});

app.get('/person/:name/:id',function(req,res){
   var name = req.params.name;
   var id = req.params.id;
   res.send(id);
   res.send(name)
});

app.get('/data',function(req,res){
    var myval = {"Name":"Gaurav"};
    var emp = [
        {
            "id": "1",
            "firstName": "Tom",
            "lastName": "Cruise"
        },
        {
            "id": "2",
            "firstName": "Maria",
            "lastName": "Sharapova"
        },
        {
            "id": "3",
            "firstName": "James",
            "lastName": "Bond"
        }
    ];

    res.json(emp);

});

app.get('/withp',function(req,res){


    var myval = {"Name":"Parita"};


    var emp = [
        {
            "id": "1",
            "firstName": "Tom",
            "lastName": "Cruise"
        },
        {
            "id": "2",
            "firstName": "Maria",
            "lastName": "Sharapova"
        },
        {
            "id": "3",
            "firstName": "James",
            "lastName": "Bond"
        }
    ];

    res.jsonp(emp);

});

app.post('/mypost',function(req,res){
    var myval = {"Name":"Parita"};
   res.json(myval);
   // var body = req.body;
    //console.log(res.json(body));
});

app.put('/myput',function(req,res){


    var myval = {"Name":"Gaurav"};

    res.json(myval);

});

app.patch('/mypatch',function(req,res){


    var myval = {"Name":"Gaurav"};

    res.send(myval);

});

app.delete('/mydelete',function(req,res){


    var myval = {"Name":"Gaurav"};

    res.send(myval);

});
