const RANDOM_QUOTE_API_URL = "https://api.quotable.io/random"
const quotedisplayElement = document.getElementById('quote-display')
const quoteInputElement = document.getElementById('quoteInput')

console.log("1")

function randomQuote(){   
  return fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content)
   
}

async function getnextQuote(){
    const quote = await randomQuote()
    // console.log(quote)
    quotedisplayElement.innerText = quote
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        
    })
}