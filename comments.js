// Create web server
// Create a web server that can listen to requests for URLs, read in a template file, 
// look up values in a JavaScript object, insert the values into the template, and 
// return the response to the client. The template file is called index.html and has 
// variables {{title}}, {{message}}, and {{time}} inside it. The values to replace 
// these variables are in a JavaScript object that is passed into the createServer 
// function as the second argument.

// -------------------------------------------------------------------------------

// ## HINTS

// The createServer method is provided by the http module:

//     var http = require('http')
//     var server = http.createServer(callback)

// For this exercise we'll be creating a raw HTTP server. To create a raw HTTP server 
// we use the http module directly. This module is core so you should not need to 
// npm install it. The http.createServer() method returns an object, much like 
// fs.createReadStream(). This object has a method .listen() which takes a port number, 
// and starts listening on that port.

// The fs core module also has some streaming APIs for files. You will need to use the 
// fs.createReadStream() method to create a stream representing the file index.html. 
// Be careful with your file paths here: __dirname + '/index.html' might not be what 
// you expect, since the __dirname is different than process.cwd(). Check the value 
// of __dirname passed in to your callback to be sure. The readStream object has a 
// method .pipe() which can be used to easily pipe the data stream to your response 
// object.

// There are a couple of different packages in npm that you could use to "template" 
// your file. The simplest one is called Mustache and implements the Mustache 
// templating language: