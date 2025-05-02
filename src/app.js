import express from 'express'
import { specs, swaggerUi } from './config/swagger.js'
import login_router from './routes/login.router.js'
import maps_router from './routes/maps.router.js'
import missions_router from './routes/missions.router.js'
// import rank_router from './routes/rank.router.js'
// import signup_router from './routes/signup.router.js'
// import teams_router from './routes/teams.router.js'
import users_router from './routes/users.router.js'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
app.use('/uploads', express.static('../uploads'))

// app.use('/login', login_router)
app.use('/maps', maps_router)
app.use('/missions', missions_router)
// app.use('/rank', rank_router)
// app.use('/signup', signup_router)
// app.use('/teams', teams_router)
app.use('/users', users_router)

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: '해당 경로를 찾을 수 없습니다.',
    })
})

app.listen(3000, () => {
    console.log('hello')
})
