import { Router } from 'express'
import users_controller from '../controllers/users.controller.js'
const users_router = Router()

// users_router.get('/')
// users_router.delete('/')
// users_router.patch('/')
// users_router.get('/impact')
users_router.get('/home', users_controller.home)
// users_router.patch('/profile')

export default users_router
