const express =  require('express')
// cors - cross origin register resource
//frontend different port and backend different port
const cors = require('cors')
// helmet-provides security by default all security features are enabled
const helmet = require('helmet')
//morgan - api logger for testing
const morgan = require('morgan')
const RunServer = require('./database/connection')
const productRoute = require('./routes/productRoutes')
const userRoute = require('./routes/userRoute')
require('dotenv').config()

const app = express()
const port = 3000

//middlewares
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/v1',productRoute)
app.use('/api/v1/user', userRoute)

RunServer()

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})