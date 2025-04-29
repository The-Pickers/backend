import pool from '../../src/config/db.config.js'
import users_service from '../../src/services/users.service.js'

async function testHome() {
    try {
        const user_index = 3
        const res = await users_service.home(user_index)
        console.log(res)
    } catch (err) {
        console.log(err)
    } finally {
        pool.end()
    }
}

testHome()
