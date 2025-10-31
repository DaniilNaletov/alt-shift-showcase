const express = require('express')
const helmet = require('helmet')
const path = require('path')
const fs = require('fs')
const crypto = require('crypto')

const app = express()
const serverUrl = process.env.VITE_API_BASE_URL
const wsUrl = process.env.VITE_API_BASE_URL.replace('https', 'wss').replace('http', 'ws')

app.use((req, res, next) => {
  // Generate a random nonce value
  const nonce = crypto.randomBytes(16).toString('base64')
  res.locals.nonce = nonce // Make nonce available in response locals

  // Construct the report-to URL dynamically based on the request
  const protocol = req.secure ? 'https' : 'http' // Check if the request is over HTTPS
  const host = req.get('host') // Get the host from the request

  const reportTo = {
    group: 'csp-endpoint',
    max_age: 10886400, // Example max age: 125 days
    endpoints: [{ url: `${protocol}://${host}/report-csp-violations` }],
    include_subdomains: true,
  }

  res.setHeader('Report-To', JSON.stringify(reportTo))
  next()
})

app.disable('x-powered-by')

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", `${serverUrl}`],
      baseUri: ["'self'"],
      connectSrc: [
        "'self'",
        `${serverUrl}`,
        `${wsUrl}`,
        'https://*.googleapis.com',
        'https://www.googletagmanager.com',
        'https://*.sentry.io',
        'https://*.google-analytics.com',
        'https://*.clarity.ms/',
      ],
      fontSrc: [
        "'self'",
        `${serverUrl}`,
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
      ],
      frameSrc: ["'self'"],
      formAction: ["'self'", `${serverUrl}`],
      frameAncestors: ["'self'", 'https://*.telegram.org'],
      imgSrc: [
        "'self'",
        `${serverUrl}`,
        'https://storage.googleapis.com',
        'https://www.googletagmanager.com',
        'https://*.googleusercontent.com',
        'data:', // Allow data URIs for images
      ],
      manifestSrc: ["'self'"],
      mediaSrc: ["'self'", `${serverUrl}`, 'https://storage.googleapis.com'],
      objectSrc: ["'self'", `${serverUrl}`],
      scriptSrc: [
        "'self'",
        (req, res) => `'nonce-${res.locals.nonce}'`,
        `${serverUrl}`,
        'https://*.sentry.io',
        'https://telegram.org',
        'https://www.googletagmanager.com',
        'https://www.clarity.ms',
      ],
      styleSrc: [
        "'self'",
        `${serverUrl}`,
        'https://*.sentry.io',
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        "'unsafe-inline'",
      ],
      workerSrc: ["'self'", 'blob:'],

      reportTo: 'csp-endpoint',
      reportUri: '/csp-violation-report-endpoint', // Deprecated, used for legacy browsers
    },
  }),
)

app.use(express.static('build', { index: false }))

app.get('/echo', (req, res) => {
  res.json({ message: 'Hello from the server!' })
})

app.post('/csp-violation-report-endpoint', express.json(), (req, res) => {
  console.log('CSP Violation: ', req.body)
  res.status(204).end()
})

let CACHED_INDEX_HTML = null
app.get('*', async (req, res) => {
  if (!CACHED_INDEX_HTML) {
    CACHED_INDEX_HTML = await fs.promises.readFile(
      path.resolve(__dirname, 'build', 'index.html'),
      'utf8',
    )
  }
  let html = CACHED_INDEX_HTML

  html = html.replace(/%CSP_NONCE%/g, res.locals.nonce)

  res.set('content-type', 'text/html')
  res.send(html)
})

const PORT = process.env.SERVER_PORT ?? 3099

app.listen(PORT, () => {
  console.log('Serving at', PORT)
  console.log('Server URL:', serverUrl)
})
