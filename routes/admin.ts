import express from 'express'

export const router = express.Router()

export const adminData = []
router.get('/add-product', (req, res, next) => {
  console.log('Add-Product page')
  res.render('add-product', {
    prods: adminData,
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  })
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})
router.post('/add-product', (req, res, next) => {
  console.log('Product page')
  const data = req.body
  console.log(data)
  adminData.push(data)
  res.redirect('/')
})
