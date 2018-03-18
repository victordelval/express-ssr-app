import express from 'express'

const router = express.Router()

router.get('/:user', (req, res) => {
    res.render('user', {
        title: 'Express SSR App - User',
        message: `Bienvenido usuario ${req.params.user}`
    })
})

export default router