const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello world")
})

app.get("/canal", (req, res) => {
  res.send("Bem vindo ao canal ")
})

app.get('/canal/teste', (req, res) => {
  res.send("<h1>Chegamos até aqui!</h1>")
})

app.get('/teste', (req, res) => {
  res.send("ola")
})
//passando parametros na rota usando o :
//parametros opcionais usam ao final? ex /:empresa? 
app.get('/teste/:param/:empresa?', (req, res) => {
  const { param, empresa } = req.params //desestruturação 
  res.send(empresa ? `olá ${param} ${empresa}` : `olá ${param}`) 
  //operador ternário
})

app.get('/testequery', (req, res) => {
  var testeQuery = req.query["query"]
  testeQuery ? res.send(testeQuery) : res.send("query nao encontrada")
})

app.listen(4000, function(error){
  if(error){
    console.log("An error has occurred")
  }else{
    console.log("Success")
  }
})