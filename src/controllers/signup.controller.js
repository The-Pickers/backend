import { HttpStatusCode } from 'axios'
import { signup } from '../dtos/signup.dto.js'
import { sucResponse, errResponse } from '../config/baseResponse.js'
import * as response from '../config/response.js'
import signup_service from '../services/signup.service.js'

export default class signup_controller {
    static async signup(req, res) {
        console.log(req.body)
        const user_id = req.body.user_id
        const user_password = req.body.user_password
        const user_name = req.body.user_name
        const user_birthday = req.body.user_birthday
        
        const data = new signup({user_id,user_password,user_name,user_birthday})
        try{
            const signupResponse = await signup_service.singup(data)
            res.status(HttpStatusCode.Ok).json(sucResponse(response.USER_SIGNUP_SUCCESS,signupResponse)) 
        }
        catch(err){
            res.status(HttpStatusCode.InternalServerError).json(errResponse(response.USER_SIGNUP_FAIL,err))
        }
    }
}
