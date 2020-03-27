import path from 'path'
import express from 'express'

const publicPath = path.join(__dirname, '/../public')

const port = process.env.PORT || 8080
const app = express()


app.listen(port, () => {
    console.log(`server on port ${port} `)
})