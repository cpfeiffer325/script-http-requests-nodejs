var https = require('https');

function getAndPrintHTML () {

  var output = "";

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
    output += data.toString();
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log(output);
      console.log('Response stream complete.');
    });

  });
}

getAndPrintHTML();



// var https = require('https')

// function getAndPrintHTML () {
//   // create a variable to store chunks to ouput once complete
//   var output = "";

//   // specify the host website and where to post the data

//   var requestOptions = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step1.html'
//   };

//   // function called when data request is made

//   var callback = function(response) {
//     console.log('In response handler callback!');

//     response.setEncoding("utf-8");
//     response.on('data', function(chunk) {

//     });
//     return output;
//   };
//   console.log('Getting ready to make a request');

//   https.get(requestOptions, callback).end();

//   console.log('Request has been made');
// }

// console.log(getAndPrintHTML());


