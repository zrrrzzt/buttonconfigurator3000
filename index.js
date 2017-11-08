'use strict'

// Packages
const Router = require('router')
const finalhandler = require('finalhandler')
const cors = require('cors')

// Utilities
const handlers = require('./lib/handlers')

// Initialize a new router
const router = Router()

// CORS
router.use(cors())

// ROUTES
router.get('/', handlers.frontpage)
router.get('/readme', handlers.readme)
router.get('/scripts/:id', handlers.showScript)
router.post('/generator', handlers.generator)

module.exports = (request, response) => {
  router(request, response, finalhandler(request, response))
}
