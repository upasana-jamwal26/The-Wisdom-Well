// script.js
const quotes = [
    "To be trusted is a greater compliment than being loved. - George Macdonald",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
    "Faith is about trusting God when you have unanswered questions. – Joel Osteen",
    "Don't let someone else's opinion of you to become your reality. – Les Brown"
  ];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  document.getElementById("new-quote").addEventListener("click", function() {
    const quoteText = getRandomQuote();
    document.getElementById("quote").textContent = quoteText;
  });