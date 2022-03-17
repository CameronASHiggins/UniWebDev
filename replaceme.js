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

async function loadObjects() {
  const url = `https://archery-api.vercel.app/api/archery/articles`;
  const response = await fetch(url);
  return response.json();
}

function buildArticleFromData(obj) {
  const article = document.createElement("article");
  const title = document.createElement("h2");
  const imgLink = document.createElement("a");
  const source = document.createElement("p");
  title.innerHTML = `<a href = ${obj.link}> ${obj.title}</a>`;
  imgLink.href = obj.link;
  imgLink.innerHTML = `<img src = ${obj.img}>`;
  source.innerHTML = `Source: ${obj.source}`;
  article.appendChild(title);
  article.appendChild(imgLink);
  article.appendChild(source);
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
