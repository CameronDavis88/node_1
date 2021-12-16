// this is the old way of importing that has to be used when using Node in th backend
const express = require('express');
const port = 3333;
const {
    getSuperheroes,
    getHero,
    addHero,
    editHero,
    deleteHero,
} = require('./controllers/getSuperheroes');

// basically this is your server now, makes an express app
const app = express();

//allows us to access the body of the requests that are sent in
app.use(express.json());

//endpoints:
app.get(`/api/superheroes`, getSuperheroes);

app.get(`/api/superheroes/:name`, getHero);

app.post(`/api/superheroes`, addHero);

app.put(`/api/superheroes/:id`, editHero);

app.delete(`/api/superheroes/:name`, deleteHero);



// Now you are telling for your server to be ready to listen for requests
//listen requires 2 arguments: port#(3001-like 999?) and the callback
app.listen(port, () => console.log(`Listening on port ${port}`));