import express from 'express'
import { specs, swaggerUi } from './config/swagger.js'
import login_router from './routes/login.router.js'
import maps_router from './routes/maps.router.js'
import missions_router from './routes/missions.router.js'
// import rank_router from './routes/rank.router.js'
import signup_router from './routes/signup.router.js'
// import teams_router from './routes/teams.router.js'
import users_router from './routes/users.router.js'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
app.use('/uploads', express.static('../uploads'))
app.use(express.json());                    // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석



// app.use('/login', login_router)
app.use('/maps', maps_router)
app.use('/missions', missions_router)
// app.use('/rank', rank_router)
app.use('/signup', signup_router)
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
