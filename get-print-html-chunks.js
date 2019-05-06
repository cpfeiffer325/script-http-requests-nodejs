var https = require('https')

function getAndPrintHTMLChunks () {

  // specify the host website and where to post the data

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  // function called when data request is made

  var callback = function(response) {
    console.log('In response handler callback!');

    response.on('data', function(chunk) {
      console.log(`-- CHUNK -- ${chunk.length} --`);
      console.log(`${chunk.toString()} \n`);
    });
  };
  console.log('Getting ready to make a request');

  https.request(requestOptions, callback).end();

  console.log('Request has been made');
}


/*
console.log('I did it!');

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

// called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');

  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --');
    console.log(chunk.toString());
  });
};

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");
*/