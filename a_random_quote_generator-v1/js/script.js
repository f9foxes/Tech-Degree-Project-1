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
    quote: 'On matters of style, swim with the current, on matters of principle, stand like a rock.',
    source: 'Thomas Jefferson',
    year: '',
    citation: '' 
  },
  {
    quote: 'The advancement and diffusion of knowledge is the only guardian of true liberty.',
    source: 'James Madison',
    year: '1751–1836',
    citation: ''
  },
  {
    quote: 'Try and fail, but don’t fail to try.',
    source: 'John Quincy Adams',
    year: '',
    citation: ''
  },
  {
    quote: 'One man with courage makes a majority.',
    source: 'Andrew Jackson',
    year: '1767–1845',
    citation: ''
  },
  {
    quote: 'It is not strange… to mistake change for progress',
    source: 'Millard Fillmore ',
    year: '',
    citation: ''
  },
  {
    quote: 'I am a slow walker, but I never walk backwards',
    source: ' Abraham Lincoln',
    year: '1809–1865',
    citation: 'https://www.lifehack.org/articles/productivity/55-inspiring-quotes-from-presidents-that-will-change-your-life.html'
  },
  {
    quote: 'If wrinkles must be written on our brow, let them not be written on our heart. The spirit should never grow old.',
    source: 'James Garfield ',
    year: '',
    citation: ''
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