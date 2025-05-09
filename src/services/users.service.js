import { getMessage } from '../config/connectAI.js'
import { home,info } from '../dtos/user.dto.js'
import users_model from '../models/users.model.js'

export default class users_service {
    static async home(user_index) {
        const result = await users_model.selectMissionInfo(user_index)
        if (!result || result.length == 0) {
            throw new Error('유저 정보를 찾을 수 없습니다.')
        }
        const res = new home(result[0])
        return res
    }

    static async info(data){
        const result = await users_model.selectUserInfo(data)
        if(!result || result.length == 0){
            throw new Error('유저 정보를 찾을 수 없습니다.')
        }
        const res = new info(result[0])
        return res
    }

    static async impact(user_index){
        const carbon_reduction = await users_model.selectCarbon(user_index)
        if(!carbon_reduction || carbon_reduction.length == 0){
            throw new Error("탄소저감 조회 실패")
        }
        const message = await getMessage(carbon_reduction[0].score_log_carbon_reduction)
        if(!message || message.length == 0){
            throw new Error("메세지 조회 실패")
        }
        return message

    }
}
