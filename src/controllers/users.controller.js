import * as response from '../config/response.js'
import { sucResponse, errResponse } from '../config/baseResponse.js'
import users_service from '../services/users.service.js'

export default class users_controller {
    static async home(req, res) {
        const user_index = req.headers.authorization
        try {
            const homeResponse = await users_service.home(user_index)
            return res.json(sucResponse(response.USER_HOME_SUCCESS, homeResponse))
        } catch (err) {
            return res.json(errResponse(response.USER_HOME_FAIL, err))
        }
    }
}
