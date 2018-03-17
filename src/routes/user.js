import express from 'express'

const router = express.Router()

router.get('/:user', (req, res) => {
    res.render('user', {
        title: 'Express Rest App - User',
        message: `Bienvenido usuario ${req.params.user}`
    })
})

export default router