import express from 'express'
import { defaultRoutes } from './defaults.js'
import config from '../lib/config.js'
import { userRoutes } from './userRouter.js'

export default () => {
  const router = express.Router()

  if(config.routes.user) {
    userRoutes(router)
  }

  if (config.routes.default) {
    defaultRoutes(router)
  }

  return router
}
