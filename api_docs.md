# API Documentation

## GET Article
Gets an article based on a random ID

`GET article/:id`

## Parameters
**id** - ID of article to retrieve

## Example

`localhost:3000/article/4`

### Returns

```
{"articleId":4,"title":"American Shorthair","subHeading":"Japanese Bobtail","content":"Deserunt nostrum molestiae reprehenderit nisi ducimus recusandae laboriosam itaque enim. Commodi fugit consectetur accusantium..","headerImage":"https://loremflickr.com/640/480/cats","datePublished":"2022-11-28T02:46:08.768Z"}
```

## POST Article
Creates a new article

`POST article/`

## Parameters
**title** - This is the title of the article\
**subHeading** - This is the subheading of the article\
**content** - This is the main body of text\
**headerImage** - This is the image displayed at the top\

## Example

```js
POST {
  title: "Cats",
  subHeading: "Why they're cool",
  content: "Cats are cool",
  headerImage: "https://cats.com/img1.png",
};
