import path from 'path'
import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'

import router from './router'


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

router(app)

app.use('/static', express.static(path.join(__dirname, 'public')))


// Middleware to manage 404 error

app.use((req, res, next) => {
    res.render('404', {
        title: 'Express Rest App - Error',
        message: 'La ruta que esta intentando acceder.. No existe!!!'
    })

    next()
})


// Server listen

app.listen('9000', () => {
    console.log('Servidor arrancado en http://localhost:9000')
})