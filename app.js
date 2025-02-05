// variables
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
    {
        quote: `“Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.”`,
        person: `Mark Twain`
    },
    {
        quote: `“You can cut all the flowers but you cannot keep Spring from coming.”`,
        person: `J.K. Rowling`
    },
    {
        quote: `“We may encounter many defeats but we must not be defeated”`,
        person: `George Orwell`
    },
    {
        quote: `“If you don’t like something, change it. If you can’t change it, change your attitude.”`,
        person: `Jane Austen`
    },
    {
        quote: `“The future belongs to those who prepare for it today”`,
        person: `J.R.R. Tolkien`
    },
    {
        quote: `“Education is the most powerful weapon which you can use to change the world`,
        person: `Malcolm `
    },
    {
        quote: `"Success isn’t about how much money you make; it’s about the difference you make in people’s lives.”`,
        person: `Nelson Mandela`
    },
    {
        quote: `"Intelligence is the ability to adapt to change.”`,
        person: `Stephen Hawking`
    }
];

btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
