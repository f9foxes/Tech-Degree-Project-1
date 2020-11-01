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

// Array of quote objects to source random quotes from.
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
    year: '',
    favorite: 'Favorite Quote'
  },
  {
    quote: 'One man with courage makes a majority.',
    source: 'Andrew Jackson',
    citation: '',
    year: '1767–1845'
  },
  {
    quote: 'It is not strange… to mistake change for progress',
    source: 'Millard Fillmore',
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
    source: 'James Garfield',
    citation: '',
    year: ''
  },
]

const colors = ['#a9cbcb', '#cbcba9', '#88976d', '#377369', '#0284d0', '#28a745', '#40e0d0',];

/***
 * `getRandomQuote` function
***/

// Function that accepts an array and returns a random object from that array (quotes).
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
  // Stores random quote object from quotes array to variable named quoteObject.
  let quoteObject = getRandomQuote(quotes);
  //console.log(quoteObject);

  //String of HTML that will placed into the index.html  page.
  let html = `
  <p class="quote"> ${quoteObject.quote} </p> 
  <p class="source"> ${quoteObject.source}
  `;

    //Checks for a citation value in the random object: quoteObject. 
    //If true then the  html string is added with the citation value.
    if (quoteObject.citation) {
      html += `<span class="citation"> ${quoteObject.citation} </span>`
    }

    //Checks for a name value in the random object: quoteObject.
    //If true then the html string is added with the year value.
    if (quoteObject.year) {
      html += `<span class="year">${quoteObject.year}</span>`
    }

    // Checks for favorite value in the random object: quoteObject.
    // If true then the favorite value prints to the h1 element.
    if (quoteObject.favorite) {
      document.getElementById('favorite').innerHTML = quoteObject.favorite;
    } else {
      document.getElementById('favorite').innerHTML = `Random Quotes`;
    }

    //Closing  'p' tag added to close the second paragragh in the html string.
    html += '</p>'
    //console.log(html);
    
    // printQuote function prints the html string to the page. 
    document.getElementById('quote-box').innerHTML = html; 
    //  Sets a random background color from colors array for each random quote.
    document.getElementById('color').style.backgroundColor = `${randomColor(colors)}`;
}

// Returns a random color from the colors array.
function randomColor (colorArray) {
    let indexColor = Math.floor( Math.random() * colorArray.length);
    return colorArray[indexColor];
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);