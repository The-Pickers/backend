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
}
