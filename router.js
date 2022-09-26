const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {

    const query = req.query

    res.send({
        status: 0,
        msg: 'get',
        data: {}
    })
    console.log('get');

})
router.post('/', async (req, res) => {
})
module.exports = router