const express = require('express')
// require('dotenv').config()
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json')
const recipes = require('./data/recipes.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World! Welcome to the fodige cafe')
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/recipes', (req, res) => {
    res.send(recipes);
})

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const selectedRecipes = recipes.find(n => n._id === id);
    res.send(selectedRecipes)
})

app.get('/chefs/:id', (req, res) => {
    const id = (req.params.id);
    res.send(recipes)
    const singleChefsRecipes = recipes.filter(n => (n.chef_id) === id);
    res.send(singleChefsRecipes)

})

app.listen(port, () => {
    console.log(`Japanese fodige cafe app listening on port: ${port}`)
})





