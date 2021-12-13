// this is the old way of importing that has to be used when using Node in th backend
const express = require('express');

// basically this is your server now, makes an express app
const app = express();

//allows us to access the body of the requests that are sent in
app.use(express.json());


// Now you are telling for your server to be ready to listen for requests
//listen requires 2 arguments: port#(3001-like 999?) and the callback
app.listen(3333, () => console.log('Listening on port 3333'));