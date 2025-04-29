import users_controller from '../../src/controllers/users.controller.js'

async function testController() {
    const user_index = 3
    const res = await users_controller.home(user_index)
    console.log(res)
}

testController()
