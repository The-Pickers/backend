import pool from '../config/db.config.js'
import { prisma } from '../config/prisma.config.js'

export default class missions_model {
    static async selectAllMission(user_index) {
        const result = await prisma.mISSIONS.findMany({
            where : {
                user_index : parseInt(user_index)
            },
            select : {
                mission_index : true,
                mission_take_time : true,
                mission_start_time : true,
                mission_clear_time : true,
                mission_status : true,
                mission_carbon_reduction : true,
                mission_detected_waste : true,
                mission_score : true,
                mission_message : true,
                location_index : true,
            }
        })
        return result
    }

    static async selectMission(data){
        const result = await prisma.mISSIONS.findMany({
            where : {
                mission_index : parseInt(data.mission_index),
            },
            select : {
                user_index : data.user_index,
                mission_index : true,
                mission_take_time : true,
                mission_start_time : true,
                mission_clear_time : true,
                mission_status : true,
                mission_carbon_reduction : true,
                mission_detected_waste : true,
                mission_score : true,
                mission_message : true,
                location_index : true,
            }
        })
        return result
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

        const location_index = body.location_index
        const clear_time = body.date_time
        const carbon_reduction = body.carbon_reduction
        const detected_waste = body.detected_waste
        const score = body.score
        const message = body.message   
        const user_index = body.user_index
        const mission_index = body.mission_index

        return new Promise((resolve,reject)=>{
            const result = pool.query(query,[location_index,clear_time,carbon_reduction,detected_waste,score,message,user_index,mission_index],(err,res)=>{
                if(err) reject(err)
                else resolve(res)
            })
        })
    }

}
