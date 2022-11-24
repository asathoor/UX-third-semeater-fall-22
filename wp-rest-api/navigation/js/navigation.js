'use strict'

/**
* file: navigation.js
**/

console.log('Hi from navigation.js')

const getPosts = "https://multimusen.dk/wp-json/wp/v2/pages/"

function getPage( pageId ) {

  fetch(getPosts + pageId ).then(
    response => {
      return response.json(); // get JSON data$
    }).then(data => {

    console.log(data); // what's in the JSON string?

    // create HTML here
    viewPosts.innerHTML = '<div>'
    + '<h2>' + data.title.rendered + '</h2>'
    + '<div>'
    + data.content.rendered
    + '</div>'
    + '</div>'

  }).catch(err => {
    // Do something with error here
    console.log('Error: ' + err)
  })
}

// Detect a click and open a page
about_btn.addEventListener("click", function(){
  console.log('Detected: click')
  getPage(9126) // getPage( aboutPageID )
});
