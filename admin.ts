import express from 'express'

export const router = express.Router()

router.get('/add-product', (req, res, next) => {
  console.log('Add-Product page')
  res.send(
    '<form action="/admin/product" method="POST"><input type="text" name="title"}><button>Submit</button></form>'
  )
  res.end()
})
router.post('/product', (req, res, next) => {
  console.log('Product page')
  const data = req.body
  console.log(data)
  res.send('<h1>Product page</h1>')
  res.end()
})
