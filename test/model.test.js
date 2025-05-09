import maps_model from '../src/models/maps.model.js'
import rank_model from '../src/models/rank.model.js'
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

// testSelectMissionCount()


async function test() {
    const result = await rank_model.selectAllRank()
    const myindex = 31
    for(const ran of result){
        if(ran.user_index == myindex){
            console.log(ran)
            break
        }
    }

}

test()