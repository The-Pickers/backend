import { login } from "../dtos/login.dto.js"
import * as response from "../config/response.js"
import { sucResponse, errResponse } from "../config/baseResponse.js"
import { HttpStatusCode } from "axios"
import login_service from "../services/login.service.js"


export default class login_controller {
    static async login(req, res) {
        const user_id = req.body.id
        const user_password = req.body.password

        const data = new login({user_id,user_password})
        
        try{
            const result = await login_service.login(data)
            res.status(HttpStatusCode.Ok).json(sucResponse(response.USER_LOGIN_SUCCESS,result))
        }
        catch(err){
            res.status(HttpStatusCode.InternalServerError).json(errResponse(response.USER_LOGIN_FAIL,err))
        }
    }
}
