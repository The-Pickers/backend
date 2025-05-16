import { Router } from 'express'
import login_controller from '../controllers/login.controller.js'

const login_router = Router()

login_router.post('/', login_controller.login)

export default login_router
