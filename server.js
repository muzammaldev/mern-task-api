require('dotenv').config()
const connectDB = require('./src/db')
const app = require('./src/app')
const PORT = process.env.PORT || '8080'

connectDB()

app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`);
})

