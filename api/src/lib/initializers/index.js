import { setupMongo } from "./mongo.js"
import { setupRoutes } from "./setupRoutes.js"

export const initializeApp = async (app, config) => {
    // initialize mongo db
    setupMongo(config)
    console.log(` -Mongo setup and connected`)

    //setup express router

    setupRoutes(app)
    console.log(`\n Express router and app router setup...`)
}