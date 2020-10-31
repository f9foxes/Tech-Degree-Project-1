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
    citation: '',
    year: '' 
  },
  {
    quote: 'The advancement and diffusion of knowledge is the only guardian of true liberty.',
    source: 'James Madison',
    citation: '',
    year: '1751–1836'
  },
  {
    quote: 'Try and fail, but don’t fail to try.',
    source: 'John Quincy Adams',
    citation: '',
    year: ''
  },
  {
    quote: 'One man with courage makes a majority.',
    source: 'Andrew Jackson',
    citation: '',
    year: '1767–1845'
  },
  {
    quote: 'It is not strange… to mistake change for progress',
    source: 'Millard Fillmore ',
    citation: '',
    year: ''
  },
  {
    quote: 'I am a slow walker, but I never walk backwards',
    source: 'Abraham Lincoln',
    citation: 'https://www.lifehack.org/articles/productivity/55-inspiring-quotes-from-presidents-that-will-change-your-life.html',
    year: '1809–1865'
  },
  {
    quote: 'If wrinkles must be written on our brow, let them not be written on our heart. The spirit should never grow old.',
    source: 'James Garfield ',
    citation: '',
    year: ''
  },
]



/***
 * `getRandomQuote` function
***/
function getRandomQuote (arr) {
  let randomNum = Math.floor( Math.random() * arr.length) + 1;
  let quote = arr[randomNum -1];
  // console.log(randomNum);
  //console.log(quote);
  return quote;
}
//getRandomQuote(quotes);

/***
 * `printQuote` function
***/

function printQuote () {
  let quoteToPrint = getRandomQuote(quotes);
  console.log(quoteToPrint);

  let html = `
  <p class="quote"> ${quoteToPrint.quote} </p> 
  <p class="source"> ${quoteToPrint.source}
  `;
    
    if (quoteToPrint.citation) {
      html += `<span class="citation"> ${quoteToPrint.citation} </span>`
    }
    if (quoteToPrint.year) {
      html += `<span class="year">${quoteToPrint.year}</span>`
    }
    html += '</p>'
    console.log(html);
    
    return document.getElementById('quote-box').innerHTML = html; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);