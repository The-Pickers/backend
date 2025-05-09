import pool from '../config/db.config.js'
import { prisma } from '../config/prisma.config.js'


export default class users_model {
    static async selectMissionInfo(user_index) {
        const query = `select 
        S.score_log_total_score,
        S.score_log_carbon_reduction,
        U.user_mission_count
        from SCORES_LOG S
        left join USERS as U on S.user_index = U.user_index
        where S.user_index = ?`

        return new Promise((resolve, reject) => {
            pool.query(query, [user_index], (err, res) => {
                if (err) reject(err)
                resolve(res)
            })
        })
    }

    static async selectUserInfo(data){
        console.log(data)
        const result = await prisma.USERS.findMany({
            where:{
                user_index : data.user_index,
            }
        })
        return result
    }
}   
