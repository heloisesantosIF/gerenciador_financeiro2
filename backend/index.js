const { response } = require('express');
const express = require('express');

const app = express();

app.listen(666,()=> console.log("Hades."));

app.get('/',(req,res)=>{ res.send("pode entrar.")})
app.get("/cachorro", (req, res) => {res.send("auau.");});
const dados = ["Helo"];
app.get('/j',(req,res)=>{res.json({dados})})