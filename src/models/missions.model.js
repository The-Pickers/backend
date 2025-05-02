import pool from '../config/db.config.js'

export default class missions_model {
    static async selectAllMission(user_index) {
        const query = `select
        *
        from MISSIONS
        where user_index = ?
        `

        return new Promise((resolve, reject) => {
            pool.query(query, [user_index], (err, res) => {
                if (err) reject(err)
                else resolve(res)
            })
        })
    }
    static async selectUserInfo(user_index) {
        const query = `
        select * from USERS where user_index = ?`

        return new Promise((resolve, reject) => {
            const result = pool.query(query, [user_index], (err, res) => {
                if (err) reject(err)
                else resolve(res)
            })
        })
    }
    static async insertMissionInfo(body) {
        const query = `
        insert into MISSIONS(
            user_index,
            mission_status,
            mission_start_time)
        values(?,?,?)`

        const user_index = body.user_index
        const start_time = body.start_time
        return new Promise((resolve, reject) => {
            const result = pool.query(query, [user_index, 0, start_time], (err, res) => {
                if (err) reject(err)
                else resolve(res.insertId)
            })
        })
    }

    static async updateMissionInfo(body) {
        const query = `
        update MISSIONS
        set
            location_index = ?,
            mission_status = 1,
            mission_clear_time = ?,
            mission_carbon_reduction = ?,
            mission_detected_waste = ?,
            mission_score = ?,
            mission_message = ?
        where
            user_index = ? and mission_index = ?`
    }
}
