// this is the old way of importing that has to be used when using Node in th backend
const express = require('express');
const portNum = 3333

// basically this is your server now, makes an express app
const app = express();

//middlewares go here


//allows us to access the body of the requests that are sent in
app.use(express.json());

let superHeroes = ['Super Man', 'Bat Man', 'Aqua Man', 'Thanos', 'Thor'] //pretend database for the purpose of this practice

//endpoints:
//for query:
app.get(`/api/superheroes`, (req, res, next) => {
    let responseHeroes = superHeroes;
    if (req.query.hero) {
        responseHeroes = superHeroes.filter(e => e.toLowerCase() === req.query.hero.toLowerCase())[0]
    }
    res.status(200).json(responseHeroes)

})

app.get(`/api/superheroes`, (req, res, next) => {
    res.status(200, console.log('200')).json(superHeroes)
    //res.send or res.json sends the thing inside as the response -- res.json forces the object to be in json format
    //make sure your status etc are all before the send or json!
})

// check out on :  http://localhost:3333/api/superheroes/Thanos
app.get(`/api/superheroes/:name`, (req, res, next) => {
    console.log(req.params) // this will only show up in your server's console, not the browser's
    const superHero = superHeroes.filter(e => e.toLowerCase() === req.params.name.toLowerCase)[0]
    res.status(200, console.log('200')).json(superHero)

})


// app.post(`/api/superheroes`)
// app.put(`/api/superheroes`)
// app.delete(`/api/superheroes`)



// Now you are telling for your server to be ready to listen for requests
//listen requires 2 arguments: port#(3001-like 999?) and the callback
app.listen(portNum, () => console.log(`Listening on port ${portNum}`));