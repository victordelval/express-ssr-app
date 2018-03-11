import path from 'path'
import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'


const app = express()

// custom settings

app.disable('x-powered-by')
app.set('env', 'development')  // process.env ...

app.use(logger('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Routes
app.get('/', (req, res) => {
    // res.end('Hola Mundo!')
    res.render('home', {
        title: 'OpenWebinars',
        message: 'Curso de NodeJS - Home'
    })
    // res.write(`
    //     <h1>Curso OpenWebinars</h1>
    //     <a href="/temario">Temario</a>
    // `)
    res.end();
})

app.get('/temario', (req, res) => {
    // res.write(`
    //     <h1>Temario del curso de NodeJS</h1>
    //     <a href="/">Volver</a>
    // `)
    res.render('temario', {
        title: 'OpenWebinars',
        message: 'Temario del curso de NodeJS'
    })
    res.end();
})

// server listen
app.listen('9000', () => {
    console.log('Servidor arrancado en http://localhost:9000')
})