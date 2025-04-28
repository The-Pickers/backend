import signup_service from '../services/signup.service.js'

export default class signup_controller {
    static async signup(req, res) {
        console.log(req)
        const { id, password } = req.body
        const signupResoponse = await signup_service.singup(id, password)
        const code = signupResoponse.code
        return res.status(code).json(signupResoponse)
    }
}
