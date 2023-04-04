import { quotes } from "./quotes.js"

const btn = document.querySelector(".generate-quotes");
const quote = document.querySelector(".quote-text");
const quoteBy = document.querySelector(".quoted-by");

btn.addEventListener("click", function(e) {
    let random = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[random].quote;
    quoteBy.textContent = quotes[random].quoteBy;
})