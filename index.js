const express = require('express')
const ejs = require('ejs')
const path = require('path')

const app = express()

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'views'))

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('home', {
        minhadata: new Date()
    })
})

app.get('/sobre', (req, res)=>{
    res.send('Página sobre!!')
})

app.listen(port, (err)=>{
    if (err) {
        console.log('Ocorreu um erro', err)
    } else {
        console.log('Servidor no ar na porta ' + port)
    }
})
