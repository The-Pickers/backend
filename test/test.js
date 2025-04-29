import users_model from '../src/models/users.model.js'

async function testSelectMissionInfo() {
    try {
        const user_index = 4
        const result = await users_model.selectMissionInfo(user_index)
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

testSelectMissionInfo()
