const express = require('express')
// require('dotenv').config()
const app = express()
// const cors = require('cors')
const port = process.env.PORT || 5000;

// const travelAreas = require('./data/travelAreas.json')
// app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World! Welcome to the fodige cafe')
})

// app.get('/travel-areas', (req, res) => {
//     res.send(travelAreas);
// })

app.listen(port, () => {
    console.log(`Japanese fodige cafe app listening on port: ${port}`)
})