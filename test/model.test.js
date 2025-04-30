import maps_model from '../src/models/maps.model.js'
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

async function testSelectMissionCount() {
    try {
        const user_index = 4
        const result = await maps_model.selectMissionCount(user_index)
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

testSelectMissionCount()
