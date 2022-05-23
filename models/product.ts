import fs from 'fs'
import path from 'path'
import { randomUUID } from 'crypto'

// type Model = {
//   title: string
//   imgUrl: string
//   description: string
//   price: string
//   uuid: string
//   fileExist: boolean
// }
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
  uuid = randomUUID()
  fileExist = false
  save(): void {
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
  static saveAll(products: Product[]): void {
    fs.writeFileSync(dataPath, JSON.stringify(products))
  }
  static fetchAll(): Product[] {
    try {
      return JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
    } catch (error) {
      return []
    }
  }
}
