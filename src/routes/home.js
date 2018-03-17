import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Express Rest App',
        message: 'Curso de NodeJS - Home'
    })
    res.end()
})

export default router