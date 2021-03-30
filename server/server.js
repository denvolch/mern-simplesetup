import express from 'express'
import path from 'path'
import { MongoClient } from 'mongodb'

import devBundle from './devBundle'
import template from './../template'

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup'
const CURRENT_WORKING_DIR = process.cwd()
let port = process.env.PORT || 3030

const app = express()
devBundle.compile(app)

MongoClient.connect(url, (err, db) => {
    console.log('Connected successfully to mongodb server')
    db.close()
})

app.listen(port, function onStart(err) {
    if (err) console.log(err)
    console.info('Server started on port %s.', port)
})
app.use('/dist', express.static( path.join(CURRENT_WORKING_DIR, '/dist') ))
app.get('/', (req, res) => res.status.send(template) )