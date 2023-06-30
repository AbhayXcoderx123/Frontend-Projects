// Variables

let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [{
    quote: `“Be yourself; everyone else is already taken.”`,
    person:`Oscar Wilde`
}, {
    quote:`“A friend is someone who knows all about you and still loves you.”`,
    person:`Elbert Hubbard`
}, {
    quote:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    person:`Albert Einstein`
}, {
    quote:`“So many books, so little time.”`,
    person:`Frank Zappa`
}, {
    quote:`“Be who you are and say what you feel, because those who mind don't matter, 
    and those who matter don't mind.”`,
    person:`Bernard M. Baruch`
}, {
    quote:`“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`,
    person:`Ralph Waldo Emerson`
}, {
    quote:`“Be the change that you wish to see in the world.”`,
    person:`Mahatma Gandhi`
}, {
    quote:`“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
    person:`J.K. Rowling`
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    
})