const {superHeroes} = require('../db/db');
let count = superHeroes.length + 1;


let getSuperheroes = (req, res) => {
    res.status(200).json(superHeroes);
}

let getHero = (req, res) => {
    let superHero = {}
    const {name} = req.params;

    for (let key in superHeroes) {
        if (superHeroes[key].name.toLowerCase() === name.toLowerCase()) {
            superHero = superHeroes[key];
        } 
    }
    res.status(200, console.log('200')).json(superHero);
}

let addHero = (req, res) => {
    const hero = req.body;
    superHeroes.push(hero);
    req.body.id = count;
    count++;
    res.status(200).json(superHeroes);
}

// let editHero = (req, res) => {
//     let newHero = req.body;
//     for (let key in superHeroes){
//     if (superHeroes[key].id === req.body.id) {
//         superHeroes.splice(key, 1, newHero);
//     }
// }
// res.status(200).json(superHeroes);
// }

// much better than how I did it above!
let editHero = (req, res) => {
    const {id} = req.params;
    const {name, power} = req.body;
    // finds the index of the hero of that id
    const index = superHeroes.findIndex(hero => hero.id == id); 
    //edits the name and power of the hero at that index of that id
    superHeroes[index].name = name;
    superHeroes[index].power = power;
    res.status(200).json(superHeroes);

}

// let deleteHero = (req, res) => {
//     const {name} = req.params;
//     for (let key in superHeroes) {
//         if (superHeroes[key].name.toLowerCase() === name.toLowerCase()){
//             superHeroes.splice(key, 1);
//         } 
//     }
//     res.status(200).json(superHeroes);
// }

// much better than how I did it above!
let deleteHero = (req, res) => {
    const {id} = req.params;
    const index = superHeroes.findIndex(hero => hero.id == id); 
    superHeroes.splice(index, 1)
    res.status(200).json(superHeroes);
}

module.exports = {
    getSuperheroes,
    getHero,
    addHero,
    editHero,
    deleteHero,
}