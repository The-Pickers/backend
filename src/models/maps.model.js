import pool from '../config/db.config.js'

export default class maps_model {
    static async selectMissionCountLocally(user_index, location_index) {
        const query = `select `
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

    static async selectMissionCount(user_index) {
        const query = `
        SELECT 
            l.location_index,
            l.location_name,
            COUNT(m.mission_index) AS mission_count
        FROM 
            LOCATIONS l
        LEFT JOIN 
            MISSIONS m 
        ON l.location_index = m.location_index AND m.user_index = ?
        WHERE 
            l.location_index BETWEEN 0 AND 15
        GROUP BY 
            l.location_index, l.location_name
        ORDER BY 
            l.location_index;`

        return new Promise((resolve, reject) => {
            const result = pool.query(query, [user_index], (err, res) => {
                if (err) reject(err)
                else resolve(res)
            })
        })
    }
}
