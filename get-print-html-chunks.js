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

    response.setEncoding("utf-8");
    response.on('data', function(chunk) {
      console.log(`-- CHUNK -- ${chunk.length} --`);
      console.log(`${chunk.toString()} \n`);
    });
  };
  console.log('Getting ready to make a request');

  https.request(requestOptions, callback).end();

  console.log('Request has been made');
}

console.log(getAndPrintHTMLChunks());


