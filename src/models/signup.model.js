import db from '../config/db.js'

export default class signup_models {
    static async insertUser(id, password) {
        const query = `insert into USERS(user_id,user_password) value(?,?)`
        db.query(query, [id, password], (err, res) => {
            if (err) throw err
            return res[0]
        })
    }
}
