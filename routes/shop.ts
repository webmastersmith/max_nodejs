import { Router } from 'express'
import { shopAddProducts } from '../controllers/products'

export const router = Router()

router.get('/', shopAddProducts)
