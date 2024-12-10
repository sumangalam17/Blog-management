import express from "express";
const app = express();
const port = 3001;

// user managment
const user = "sam";
app.post("/api/auth/sign-up",(req,res)=>{
    res.send("Sign up a new user account.");
})

app.post("/api/auth/sign-in:",(req,res)=>{
    res.send("Sign in with a username and password.");
})

app.get(`/api/auth/${user}`,(req,res)=>{
    res.send("Get specific user details.");
})

app.listen(port,()=>{
    console.log("server started");
})