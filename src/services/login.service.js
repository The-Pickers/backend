import { login_token } from "../dtos/login.dto.js"
import login_model from "../models/login.model.js"

export default class login_service{
    static async login(data){
        const checkID = await login_model.selectUserID(data.user_id)
        if(checkID.length == 0){
            throw new Error('아이디가 일치하지 않습니다.')
        }
        const checkPassword = await login_model.selectUserPassword(data.user_id,data.user_password)
        if(checkPassword.length == 0){
            throw new Error('비밀번호가 일치하지 않습니다.')
        }
        const token = new login_token(checkPassword[0])
        return token
    }
}