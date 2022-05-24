import fs from 'fs'
import path from 'path'
import { Product } from './product'

const cartPath = path.join(process.cwd(), 'data', 'cart.json')
const cartArr: Product[] = []

export class Cart {
  static addToCart(product: Product): void {
    fs.readFile(cartPath, 'utf-8', (err, data) => {
      let cart = { products: [], total: 0 }
      if (!err) {
        cart = JSON.parse(data)
      }
      // file exist so add product to it.
      fs.writeFileSync(
        cartPath,
        JSON.stringify({ products: [...cart.products, product], total: 0 })
      )
    })
  }

  static fetchAll() {
    return cartArr
  }
}
