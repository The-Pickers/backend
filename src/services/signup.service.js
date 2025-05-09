import signup_models from '../models/signup.model.js'

export default class signup_service {
    static async singup(data) {
        const checkExistUser = await signup_models.selectUser(data.user_id)
        if(checkExistUser.length != 0){
            throw new Error('이미 존재하는 아이디입니다.')
        }
        const result = await signup_models.insertUser(data)
        return result

    }
}
