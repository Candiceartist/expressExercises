const express = require('express');
const app = express();
const port = 3000;

const answers =  [
    "It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes definitely",
    "You may rely on it", 
    "As I see it yes", 
    "Most likely", 
    "Outlook good",
    "Yes", 
    "Signs point to yes", 
    "Reply hazy try again", 
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now", 
    "Concentrate and ask again",
    "Don't count on it", 
    "My reply is no", 
    "My sources say no",
    "Outlook not so good", 
    "Very doubtful"]


app.get("/", (req,res) => {
    res.send('<h1>Hello Stranger</h1>' + '' + '<h3>99 Bottles of beer on the wall</h3>' +
    '<a href ="/98">Take one down, pass it around</a>');
});

app.get("/:numOfBottles", (req, res) => {
    let bottleNumbers = req.params.numOfBottles;
    if (bottleNumbers > 0) {
      res.send(`<h3>${bottleNumbers} Bottles of beer on the wall</h3>
          <a href ="/${bottleNumbers - 1}">Take one down, pass it around</a>`);
    } else {
      res.send(`No more beers! <a href ="/">Please start over</a>`);
    }
  });

app.get('/greeting', (req, res) => {
    res.send("Greetings");
});

app.get('/greeting/:name', (req, res) => {
    res.send('Greetings' + ' ' + req.params.name);
});

app.get('/tip', (req, res) => {
    res.send("Calculate your tip");
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send('Your total is' + ' ' + req.params.total + ' '  + 'and your tip is' + ' ' + req.params.tipPercentage);
});

app.get('/magic/:question', (req, res) => {
    res.send(req.params.question + '<h1>' + answers[0] + '</h1>');
  
});





app.listen(port,() => {
    console.log('listening on port', port);
});
