const {superHeroes} = require('../db/db');
let count = superHeroes.length + 1;


let getSuperheroes = (req, res) => {
    let responseHeroes = superHeroes;
    res.status(200).json(responseHeroes);
    console.log(count)
}

let getHero = (req, res) => {
    let superHero = {}
    for (let key in superHeroes) {
        if (superHeroes[key].name.toLowerCase() === req.params.name.toLowerCase()) {
            superHero = superHeroes[key]
        } 
    }
    res.status(200, console.log('200')).json(superHero);
}

let addHero = (req, res) => {
    superHeroes.push(req.body);
    req.body.id = count;
    count++
    res.status(200).json(superHeroes);
}

let editHero = (req, res) => {
    let newHero = req.body;
    for (let key in superHeroes){
    if (superHeroes[key].id === req.body.id) {
        superHeroes.splice(key, 1, newHero);
    }
}
res.status(200).json(superHeroes);
}

let deleteHero = (req, res) => {
    for (let key in superHeroes) {
        if (superHeroes[key].name.toLowerCase() === req.params.name.toLowerCase()){
            superHeroes.splice(key, 1);
        } 
    }
    res.status(200).json(superHeroes);
}

module.exports = {
    getSuperheroes,
    getHero,
    addHero,
    editHero,
    deleteHero,
}