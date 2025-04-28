import { Router } from 'express'
import signup_controller from '../controllers/signup.controller.js'
const signup_router = Router()

signup_router.post('/', signup_controller.signup)

export default signup_router
