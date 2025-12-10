import express from 'express'
import { addNewRestaurant, getRestaurant } from '../controller/restaturant.controller.js'

export const router = express.Router()

router.post('/add-restaurant',addNewRestaurant)
router.get('/search',getRestaurant)