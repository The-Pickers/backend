import signup_models from '../models/signup.model.js'

export default class signup_service {
    static async singup(data) {
        const result = await signup_models.insertUser(data)
        return result

    }
}
