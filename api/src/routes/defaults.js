import express from 'express'

const defaultRouter = express.Router()

export const defaultRoutes = (router) => {
  router.use('/', defaultRouter)

  defaultRouter.get('/ping', (req, res) => {
    console.log(`Hitting the ping handler ${req.url} - ${Date.now()}`)
    res.status(200).json({
      code: 200,
      message: `Pong test Successful`,
    })
  })

  defaultRouter.all('/ping', (req, res) => {
    const code = 405
    res.status(code).json({
      code,
      message: `${req.method} method is not allowed for this root ${req.url}`,
    })
  })

  defaultRouter.all('*', (req, res) => {
    const code = 404
    res.status(code).json({
      code,
      message: `${req.url} Not found`,
    })
  })
}
