import signup_model from '../models/signup.model.js'

export default class signup_service {
    static async singup(data) {
        const checkExistUser = await signup_model.selectUser(data.user_id)
        if(checkExistUser.length != 0){
            throw new Error('이미 존재하는 아이디입니다.')
        }
        const result = await signup_model.insertUser(data)
        if(!result){
            throw new Error('회원가입 실패')
        }
        const user_index = result.user_index
        const addLog = await signup_model.insertScoreLog(user_index)
        if(!addLog){
            throw new Error('점수 기록 실패')
        }
        return result

    }
}
