import fs from 'fs'
import path from 'path'

const dataPath = path.join(process.cwd(), 'data', 'product.json')
export class Product {
  title: string
  imgUrl: string
  description: string
  price: string
  constructor(
    title: string,
    imgUrl: string,
    description: string,
    price: string
  ) {
    this.title = title
    this.imgUrl = imgUrl
    this.description = description
    this.price = price
  }
  fileExist = false
  save() {
    if (!this.fileExist) {
      // only run this fn once.
      // check if file exist, if not create it.
      if (!fs.existsSync(dataPath)) {
        fs.writeFileSync(dataPath, JSON.stringify([]))
        this.fileExist = true
      } else {
        this.fileExist = true
      }
    }
    const products = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
    fs.writeFileSync(dataPath, JSON.stringify([...products, this]))
  }
  static fetchAll() {
    try {
      return JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
    } catch (error) {
      return []
    }
  }
}
