import path from 'path'
import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'

import router from './router'


let _server

const server = {
    start() {
        const app = express()

        // Custom settings
        app.disable('x-powered-by')
        app.set('env', process.env.NODE_ENV)
        if (process.env.NODE_ENV !== 'test') {
            app.use(logger('combined'))
        }
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
        _server = app.listen('9000', () => {
            console.log('Servidor arrancado en http://localhost:9000')
        })
    },

    close() {
        _server.close()
    }
}

export default server

if (!module.parent) {
    server.start()
}