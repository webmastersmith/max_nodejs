import express from 'express'
import path from 'path'

export const router = express.Router()

router.get('/add-product', (req, res, next) => {
  console.log('Add-Product page')
  res.sendFile(
    path.join(process.cwd(), '..', 'view', 'admin', 'add-product.html')
  )
})
router.post('/product', (req, res, next) => {
  console.log('Product page')
  const data = req.body
  console.log(data)
  res.send('<h1>Product Page</h1>')
})
