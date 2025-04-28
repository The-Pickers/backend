import { response } from '../config/response.js'
import * as baseResponse from '../config/baseResponse.js'
import signup_models from '../models/signup.model.js'

export default class signup_service {
    static async singup(id, password) {
        const result = await signup_models.insertUser(id, password)
        return response(baseResponse.AUTH_REGISTER_SUCCESS, result)
    }
}
