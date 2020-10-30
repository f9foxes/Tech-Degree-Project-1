/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: '1',
    source: '',
    citation: '',
    year: ''
  },
  {
    quote: '2',
    source: '',
  },
  {
    quote: '3',
    source: '',
  },
  {
    quote: '4',
    source: '',
  },
  {
    quote: '5',
    source: '',
  },
  {
    quote: '6',
    source: '',
  },
  {
    quote: '7',
    source: '',
  },
]



/***
 * `getRandomQuote` function
***/
function getRandomQuote (arr) {
  let randomNum = Math.floor( Math.random() * arr.length) + 1;
  let quote = arr[randomNum -1].quote;
  return quote;
}
console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
***/




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);