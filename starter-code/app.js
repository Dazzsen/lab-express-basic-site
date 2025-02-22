const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(`${__dirname}/views/home-page.html`))
app.get('/about', (req, res) => res.sendFile(`${__dirname}/views/about-page.html`))
app.get('/galery', (req, res) => res.sendFile(`${__dirname}/views/photo-galery-page.html`))


app.listen(port, () => console.log(`App escuchando en el puerto ${port}`))

//nodemon app.js
//node app.js
//npm init --y
