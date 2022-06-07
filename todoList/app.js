const express=require('express')
const bodyparser=require('body-parser');
var items=[];
let workItems=[]
const ejs=require('ejs')
const app=express();
app.use(express.static('public'))
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    var today=new Date();
    var options={
        weekday:"long",day:"numeric",month:"long"
    }
    var day=today.toLocaleDateString("en-US",options);
    res.render('list',{listTitle:day,newListItem:items})
})
app.post('/',function(req,res){
    
    let item=req.body.newItem;
    if(req.body.list==='Work'){
        workItems.push(item);
        res.redirect('/work')
    }
    else{
        items.push(item);
        res.redirect('/')
    }
})
app.get('/about',function(req,res){
    res.render("about")
})
app.get('/work',function(req,res){
    res.render('list',{listTitle:"Work List",newListItem:workItems});
})
app.listen(3000,function(){
    console.log("backend server is running\n")
})