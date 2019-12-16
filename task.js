console.log('hello')
var express = require('express');
var app = express();
var person=[];
var j=0;
app.use(express.json());
app.listen(3000,function(error){

    if(error)
    {
        console.log("Error occured on start",error);
    }
    console.log("Node application has successfully started on http://localhost:3000");

});
app.post('/post',function(req,res){
    var body = req.body;
    var arr=[];
    console.log(body)
    for(i of body["data"])
    {
        person[j]=Array();
        person[j][0]=i.id;
        person[j][1]=i.Name;
        person[j][2]=i.City;
        person[j][3]=i.Age;
        person[j][4]=i.DOB;
        person[j][5]=i.Gender;
        j++;
    }
    for(i=0;i<person.length;i++)
    {
        console.log(person[i])
        arr.push(person[i]);
    }
    res.send(arr)

});
app.get('/querystring',function(req,res){
  var xyz=req.query.Name;
  var rst = req.query.City;
  var abc=req.query.Age;
   var pqr=req.query.Gender;
    var a=req.body.data
    console.log(a.length)
    var j;
    var arr=[];
    for(var i=0;i<a.length;i++)
    {
        console.log('bbbb')
        console.log(a[i])
        console.log(xyz)
        if(a[i].Name == xyz || a[i].City == rst || a[i].Age == abc || a[i].DOB == xyz || a[i].Gender == pqr)
        {
            console.log('aaaaa');
            arr.push(a[i]);
            console.log(arr)
        }
    }
    console.log(arr);
    res.send(arr);
});
app.get('/params/:id/',function(req,res){
    var xyz=req.params.id;
    var a=req.body.data
    a.forEach(elements=> {
        if(elements.id == xyz)
        {
            console.log(res.send(elements))
            res.status(200).json('Success');
        }
        else
        {
                res.status(404).json('Failed');
        }
    });

});

app.put('/put/:id', function(req,res) {
    console.log('this is an update');
    var xyz=req.params.id
    console.log(xyz)
    var body = req.body;
    for(i of body["data"])
    {
        person[xyz]=Array();
        person[xyz][0]=i.id;
        person[xyz][1]=i.Name;
        person[xyz][2]=i.City;
        person[xyz][3]=i.Age;
        person[xyz][4]=i.DOB;
        person[xyz][5]=i.Gender;
        xyz++;
    }
    for(i=0;i<person.length;i++)
    {
        console.log(person[i])
    }
});
app.patch('/patch', function(req,res) {
    console.log('this is an update');
    var xyz=req.query
    console.log(xyz)
    var body = req.body;
    for(i of body["data"])
    {
        person[i]=Array();
        person[i][0]=xyz.id;
        person[i][1]=xyz.Name;
        person[i][2]=xyz.City;
        person[i][3]=xyz.Age;
        person[i][4]=xyz.DOB;
        person[i][5]=xyz.Gender;
    }
    for(i=0;i<person.length;i++)
    {
        console.log(person[i])
        arr.push(a[i]);
        console.log(arr)
    }
    res.send(arr)
});
app.delete('/delete/:id/',function(req,res){
  /*  var xyz=req.params.id;
    var a=req.body.data
    console.log('aaa')
   // console.log(typeof xyz)
    a=a.filter(elemets=>{
        return elemets.id !=  xyz;
    });
    console.log(a);
    res.send(a);*/
 var xyz = req.params.id;

    var temp=[];
    var arr=[];
  j=parseInt(xyz);
  if(xyz==(person.length)-1)
  {
      person.pop();
  }
  else
  {
      for(i=parseInt(xyz)+1;i<person.length;i++)
      {
          person[j++]=person[i];
      }
      person[(person.length)-1]=temp;
      person.pop();
  }
    console.log("After delete data array is ");
    for(i=0;i<person.length;i++)
    {

        console.log(person[i])
      //  arr.push(person[i]);
    }
    res.send(person)
});
