import * as response from '../config/response.js'
import { sucResponse, errResponse } from '../config/baseResponse.js'
import users_service from '../services/users.service.js'
import { HttpStatusCode } from 'axios'
import { info } from '../dtos/user.dto.js'

export default class users_controller {
    static async home(req, res) {
        const user_index = req.headers.authorization
        try {
            const homeResponse = await users_service.home(user_index)

            res.status(response.USER_HOME_SUCCESS.code)
            return res.json(sucResponse(response.USER_HOME_SUCCESS, homeResponse))
        } catch (err) {
            res.status(response.USER_HOME_FAIL.code)
            return res.json(errResponse(response.USER_HOME_FAIL, err))
        }
    }

    static async info(req,res){
        const user_index = req.headers.authorization
        try{
            const data = new info({user_index})
            const infoResponse = await users_service.info(data)
            res.status(HttpStatusCode.Ok).json(sucResponse(response.USER_INFO_SUCCESS,infoResponse))
        }
        catch(err){
            res.status(HttpStatusCode.InternalServerError).json(errResponse(response.USER_INFO_FAIL,err))
        }
    }
}
