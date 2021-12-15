
//pretend database for the purpose of this practice
let superHeroes = [
    {name: 'Super Man', power: 'Web-slinging'},
     {name: 'Bat Man', power: 'Technology'},
     {name: 'Aqua Man', power: 'Breath-holding'},
     {name: 'Thor', power: "Flying-ish"},
    ] 

    let getSuperheroes = (req, res) => {
        let responseHeroes = superHeroes;
        if (req.query.hero) {
            responseHeroes = superHeroes.filter(e => e.toLowerCase() === req.query.hero.toLowerCase())[0]
        }
        res.status(200).json(responseHeroes)
    }
   
    let getHero = (req, res) => {
        let superHero = {}
        for (let key in superHeroes){
            if(superHeroes[key].name === req.params.name){
                superHero = superHeroes[key]
            }
    }
    res.status(200, console.log('200')).json(superHero)
    
    }
    
    let addHero = (req, res) => {
        superHeroes.push(req.body)
        res.status(200).json(superHeroes)
    }
    
    let editHero = (req, res) => {
        for (let key in superHeroes){
            if(superHeroes[key].name === req.body.name)
            superHeroes.splice(key, 1, req.body)
        }
        res.status(200).json(superHeroes)
    }
    
    let deleteHero = (req, res) => {
        for (let key in superHeroes){
            if(superHeroes[key].name === req.params.name)
            superHeroes.splice(key, 1)
        }
        res.status(200).json(superHeroes)
    }


//You could just export the names of the functions or do module.exports for the whole thing but it needs to be an object
module.exports = {
getSuperheroes,
getHero,
addHero,
editHero,
deleteHero,
}