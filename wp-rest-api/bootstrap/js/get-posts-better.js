'use strict'

/**
* file: get-posts.js
**/

const wpSite = "https://multimusen.dk/wp-json/wp/v2/"
const content =  viewPosts.innerHTML

function fetchPosts( endpoint ) {

let getPosts = wpSite + endpoint // endpoint: posts

fetch(getPosts).then(
  response => {
    return response.json(); // get JSON data$
  }).then(data => {

  // loop out content
  for (let i = 0; i < data.length; i++) {

    content += '<div class="posts">' // contentwrapper
    + '<h2>' + data[i].title.rendered + '</h2>' // title
    + '<div className="posts_content">'
    + data[i].content.rendered
    + '</div>' // end content
    + '</div>' // end contentwrapper

  }
}).catch(err => {
  // Do something with error here
  console.log('There was an error ...')
})

} // end fetchPostsx
