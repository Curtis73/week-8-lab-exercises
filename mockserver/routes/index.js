const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database("database.sqlite3");

/* GET home page. */
router.get('/', (request, response) => {

  db.run(```
    CREATE TABLE IF NOT EXISTS articles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      subHeading TEXT,
      content TEXT,
      headerImage TEXT,
      datePublished TEXT
    );
  ```);

  response.json({ title: "our cool content api", status: "all ok" });
});

/**
 * Get an article based on a random ID
 */
router.get('/article/:id', (request, response) => {
  const articleId = parseInt(request.params?.id);
  let output = {
    articleId,
    title: faker.animal.cat(),
    subHeading: faker.animal.cat(),
    content: faker.lorem.paragraph(150),
    headerImage: faker.image.cats(),
    datePublished: faker.date.recent()
  };

  response.json(output);
});

/**
 * Create a new article
 */
router.post('/article', (request, response) => {
  const {
    title,
    subHeading,
    content,
    headerImage
  } = request.body;
  const datePublished = new Date().toDateString();

  console.log(title)
  console.log(subHeading)
  console.log(content)
  console.log(headerImage)

  if (title == undefined || subHeading == undefined || content == undefined || headerImage == undefined) {
    response.statusCode = 500;
    response.json({ status: "Missing values. Please ensure your request contains title, subHeading, content, and headerImage"})
  }

  db.run(```
    INSERT INTO articles VALUES (
      "${title}",
      "${subHeading}",
      "${content}",
      "${headerImage}",
      "${datePublished}"
    );
  ```);

  response.statusCode = 201;
  response.json({ status: "Thanks for the new article" });
});

module.exports = router;
