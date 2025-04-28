import { Router } from 'express'
import login_controller from '../controllers/login.controller.js'

const login_router = Router()
/**
 * @swagger
 * /login:
 *   post:
 *     summary: 로그인
 *     description: 아이디 비밀번호를 사용하여 로그인합니다.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: testid
 *               password:
 *                 type: string
 *                 example: yourpassword
 *     responses:
 *       200:
 *         description: 로그인 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: jwt_token_here
 *       400:
 *         description: 잘못된 요청
 *       401:
 *         description: 인증 실패
 */
login_router.post('/', login_controller.login)

export default login_router
