import express from 'express'
import { specs, swaggerUi } from './config/swagger.js'
import login_router from './routes/login.router.js'
import maps_router from './routes/maps.router.js'
import missions_router from './routes/missions.router.js'
// import rank_router from './routes/rank.router.js'
// import signup_router from './routes/signup.router.js'
// import teams_router from './routes/teams.router.js'
import users_router from './routes/users.router.js'

const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
app.use('/uploads', express.static('../uploads'))

app.use('/login', login_router)
app.use('/maps', maps_router)
app.use('/missions', missions_router)
// app.use('/rank', rank_router)
// app.use('/signup', signup_router)
// app.use('/teams', teams_router)
app.use('/users', users_router)

app.listen(3000, () => {
    console.log('hello')
})
