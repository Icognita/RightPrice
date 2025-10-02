require('dotenv').config()
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT
require("./config/db")

const app = express()
app.use(cors())
app.use(express.json())

const productRouter = require('./routes/productRoutes')




app.use('/api/product', productRouter)




app.use((err, req, res, next) => {
  console.error('🔥 Internal error:', err.stack)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
