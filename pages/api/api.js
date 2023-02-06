const express = require('express')
const app = express()

app.listen(8000, () => {
    console.log('app connected')
})

app.get('/api', (req, res) => {
    res.json({
        name: "req.body.name"
    })
})

