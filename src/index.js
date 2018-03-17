import path from 'path'
import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'


const app = express()


// Custom settings

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
        title: 'Express Rest App',
        message: 'Curso de NodeJS - Home'
    })
    res.end();
})

app.get('/temario', (req, res) => {
    res.render('temario', {
        title: 'Express Rest App',
        message: 'Temario del curso de NodeJS'
    })
    res.end();
})

app.get('/:user', (req, res) => {
    res.render('user', {
        title: 'Express Rest App - User',
        message: `Bienvenido usuario ${req.params.user}`
    })
})


app.use('/static', express.static(path.join(__dirname, 'public')))


// Middleware 404
app.use((req, res, next) => {
    res.render('404', {
        title: 'Express Rest App - Error',
        message: 'La ruta que esta intentando acceder.. No existe!!!'
    })

    next();
})



// server listen

app.listen('9000', () => {
    console.log('Servidor arrancado en http://localhost:9000')
})