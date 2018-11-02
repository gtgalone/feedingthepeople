const express = require('express')
const next = require('next')
const axios = require('axios')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/users/:id', (req, res) => {
      return app.render(req, res, '/users', { id: req.params.id })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      setInterval(() => axios.get('https://buildingthebridgeusa.com/'), 60 * 10 * 1000)

      console.log(`> Ready on http://localhost:${port}`)
    })
  })
