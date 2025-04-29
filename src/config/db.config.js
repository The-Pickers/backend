import { config } from 'dotenv'
import * as mysql from 'mysql2'

config('../.env')

// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
// })
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

// pool.connect((err) => {
//     if (err) {
//         console.error('Error connecting to the database: ' + err.stack)
//         return
//     }
//     console.log('Connected to the database as ID ' + pool.threadId)
// })

export default pool
