const express = require('express')
const app = express()
const port = 3000

const path = require('path')

app.use(express.static('public'));

var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
  };
  
  app.use(requestTime);
  


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname +'/index.html'));

  
})

app.get('/service.html', (req, res) => {
    res.sendFile(path.join(__dirname +'/service.html'));
    
  })

  app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname +'/contact.html'));
    
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})