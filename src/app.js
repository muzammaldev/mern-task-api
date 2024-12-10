const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/auth.routes')
const taskRoutes = require('./routes/task.route')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth' , authRoutes)
app.use('/api/task' , taskRoutes)


module.exports = app