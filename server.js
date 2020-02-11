const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get("/main",(req,res)=>{
    res.render("main", {
        title: "Home Page",
        
    });
    
})
app.get("/roomlisting",(req,res)=>{
    res.render("roomlisting", {
        title: "Room Listing",
        
    });
    
})
app.get("/userregistration",(req,res)=>{
    res.render("userregistration", {
        title: "User Registration",
        
    });
    
})
app.post("/sendForm1",(req,res)=>{

    const errors= [];

    if(req.body.firstName=="")
  {
    errors.push("Sorry, you must enter your First Name");

  }

  if(req.body.lastName=="")
  {
    errors.push("Sorry, you must enter a your Last Name")
  }
  if(errors.length > 0)
  {
    res.render("form",{
      messages : errors
    })
  }
  else()=>{
      return true;
  }
    
  })


app.listen(3000, () => {
    console.log('web app is up and running on port')
})
