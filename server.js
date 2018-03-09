const express = require('express');
const app = express();
const json = require('./public/json')

const urlLogger = (request, response, next) => {
  console.log('request URL:', request.url);
  next();
}

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
}

app.use(urlLogger, timeLogger);
app.use(express.static('public'));
app.use('/json', express.static('public/json.js'));

app.get('/', (request, response) => {
  // response.send('hello world');
});

app.get('/json', (request, response) => {
  //response.status(200).json(json);
});


app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

app.use((request, response, next) => {
  response.status(404).send('404 file not found!')
})