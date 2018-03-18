import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.render('temario', {
        title: 'Express SSR App',
        message: 'Temario del curso de NodeJS'
    })
    res.end()
})

export default router