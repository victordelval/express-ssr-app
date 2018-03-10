import path from 'path'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'


const app = express()

// custom settings

app.disable('x-powered-by')
app.set('env', 'development')  // process.env ...

app.use(morgan())
// app.use(morgan('tiny'))  // 'combined'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// root url
app.get('/', (req, res) => {
    // res.end('Hola Mundo!')
    res.render('home', {
        title: 'Curso de OpenWebinars',
        message: 'Nuestro primer layout con variables'
    })
})

app.listen('9000', () => {
    console.log('Servidor arrancado en http://localhost:9000')
})