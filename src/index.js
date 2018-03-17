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
    res.render('home', {
        title: 'OpenWebinars',
        message: 'Curso de NodeJS - Home'
    })
    res.end();
})

app.get('/temario', (req, res) => {
    res.render('temario', {
        title: 'OpenWebinars',
        message: 'Temario del curso de NodeJS'
    })
    res.end();
})

app.get('/:user', (req, res) => {
    res.render('user', {
        title: 'OpenWebinars - User',
        message: `Bienvenido usuario ${req.params.user}`
    })
})

app.use('/static', express.static(path.join(__dirname, 'public')))

// server listen
app.listen('9000', () => {
    console.log('Servidor arrancado en http://localhost:9000')
})