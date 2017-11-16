const showdown = require('showdown');

// to be used for markdown to html conversion
const converter = new showdown.Converter();

// markdown to be stored in db object
const aboutMe = `## About Me

Hello internet! My name is Jason Figueroa, I am a passionate computer person 
based in Nashville, TN. I’m currently focusing on web development while 
attending Nashville Software School.

Although I grew up with computers at home my computer journey didn’t really 
start until the spring of 2008 when I decided to buy a cheap eMachines desktop 
from Best Buy just to take it apart. Since then I’ve built custom computers, 
repaired laptops, dabbled with databases, created small webservers, and lots more.

When I’m not working on something for school I will typically be working on one 
of my many projects. The current hobby project I’m focusing on is a media center 
I’ve set up on a Raspberry Pi.

When I’m not hanging out in the digital world I like to relax with my wife and 
daughter.`;

const whySoftware = `## Why Software

Of all the areas related to IT, software is the most fascinating to me. Without 
it all you’re left with is a very expensive paperweight. It is what powers 
everything in modern society from the smartphone in your pocket, to the rockets 
we trust to shuttle our astronauts to the International Space Station. Whether 
retrieving data from a database or working with a server, software is what gives 
us the power to leverage machines to make our lives easier.

Software development is both calculated and creative. The skills needed to develop 
software are difficult to obtain but not unattainable by the average person. Yet 
it is very daunting to most people.

It is one of the most powerful tools we have at our fingertips. With software we 
literally have the power to change the world. Having a computer do what you 
programmed it to do is very empowering and is something that should be shared 
with everyone.`;

const quote = `The programmers of tomorrow are the wizards of the future. You’re 
going to look like you have magic powers compared to everybody else.<br>
<span>-Gabe Newell</span>`;

// db object
const db = {
  aboutMe,
  whySoftware,
  quote,
};

// console.log(db.aboutMe);
// console.log(db.whySoftware);

// let html = converter.makeHtml(db.aboutMe);

const mainSection = document.getElementById('main');

const aboutMeArticle = document.createElement('article');
aboutMeArticle.innerHTML = converter.makeHtml(db.aboutMe);

const whySoftwareArticle = document.createElement('article');
whySoftwareArticle.innerHTML = converter.makeHtml(db.whySoftware);

const quoteArticle = document.createElement('article');
quoteArticle.innerHTML = converter.makeHtml(db.quote);

mainSection.appendChild(aboutMeArticle);
mainSection.appendChild(whySoftwareArticle);
mainSection.appendChild(quoteArticle);

// mainSection.innerHTML = html;
