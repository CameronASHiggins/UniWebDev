// We want to see some non-trivial Javascript code
// At a minimum, you should demonstrate a few simple uses of event-driven JavaScript for DOM manipulation
// You should use ES6 syntax throughout: e.g. don't use "var", use the modern tools (template literals, arrow functions).
// There should be no JavaScript errors in the browser console

// For more marks, we like to see a bit more complex use of JavaScript, perhaps some looping and/or more complex DOM manipulation.
// Accessing APIs is a great option if it fits with your project, or you can work with your own, local data.
// Your code should be DRY, if you have repeated code, consider refactoring as a function with arguments for example.
// We like to see what you can do. Be creative.

"use strict";

menuHandler.addEventListener('click', ev => {
  menu.classList.toggle('closed');
})

//This is to title case the article names as they come fully uppercase.
function titleCase(str) {
  str = str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase()+word.slice(1));
  })
  return str.join(' ');
}

async function loadObjects() {
  const url = `https://archery-api.vercel.app/api/archery/articles`;
  const response = await fetch(url);
  return response.json();
}

function buildArticleFromData(obj) {
  const article = document.createElement("article"); //Create article
  const imgLink = document.createElement("a"); //Create an a element
  article.appendChild(imgLink); //Add the a element to the article

  const div = document.createElement("div");
  const title = document.createElement("h2");
  const source = document.createElement("p");
  const editedTitle = titleCase(obj.title);
  title.innerHTML = `<a href = ${obj.link}> ${editedTitle}</a>`;
  imgLink.href = obj.link;
  imgLink.innerHTML = `<img src = ${obj.img}>`;
  source.innerHTML = `Source: ${obj.source}`;
  div.appendChild(title);
  div.appendChild(source);
  imgLink.appendChild(div);
  return article;
}

async function insertArticles() {
  const obj = await loadObjects();
  console.log(obj);

  const articles = obj.map(buildArticleFromData);
  articles.forEach((item) => {
      results.appendChild(item)
  });
}

insertArticles();
