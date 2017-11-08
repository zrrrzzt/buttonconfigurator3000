'use strict'

const readFileSync = require('fs').readFileSync
const bodyParser = require('urlencoded-body-parser')
const uuid = require('uuid')
const md = require('markdown-it')()
const { send } = require('micro')
const buildButtons = require('./build-buttons')
const generateScript = require('./generate-scripts')
const scripts = {}

exports.readme = (request, response) => {
  const readme = readFileSync('./README.md', 'utf-8')
  send(response, 200, md.render(readme))
}

exports.frontpage = (request, response) => {
  const html = readFileSync('static/html/form.html', 'utf-8')
  send(response, 200, html)
}

exports.showScript = (request, response) => {
  const id = request.params.id
  response.setHeader('Content-Type', 'text/plain')
  send(response, 200, scripts[id])
}

exports.generator = async (request, response) => {
  const data = await bodyParser(request)
  const uid = uuid()
  scripts[uid] = generateScript(buildButtons(data))
  const url = `https://www.espruino.com/ide/#https://nodeconfeubadge.allthethings.win/scripts/${uid}`
  response.writeHead(302, { Location: url })
  response.end()
}
