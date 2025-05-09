import { Router } from 'express'
import { uploadPhotoMiddleware } from '../middleware/multer.js'
import missions_controller from '../controllers/missions.controller.js'
const missions_router = Router()

/**
 * @swagger
 * /missions:
 *   get:
 *     summary: 미션 조회
 *     description: 내가 지금까지 완료했던 미션정보를 조회한다.
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                missions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       missions_index:
 *                         type: integer
 *                         example: 1
 *                       mission_time:
 *                         type: string
 *                         format : date-time
 *                         example: 01:00:00
 *                       completed:
 *                         type: boolean
 *                         example : true
 *                       carbon_reduction:
 *                         type: number
 *                         example : 35.1
 *                       message:
 *                         type: string
 *                         example : 지구의 수호자! 지금까지 탄소 5.2kg과 쓰레기 18.5kg을 줄였어요 🌍💚
 *                       detected_waste:
 *                         type: integer
 *                         example : 10
 *                       score:
 *                         type: integer
 *                         example : 10
 *       400:
 *         description: 잘못된 요청
 *       401:
 *         description: 인증 실패
 */
missions_router.get('/', missions_controller.getInfo)

/**
 * @swagger
 * /missions/start:
 *   get:
 *     summary: 미션시작
 *     description: 미션을 시작한다. 비디오를 서버에 넘겨 분석을 시작하고 새로운 데이터를 생성한다
 *     security:
 *      - bearerAuth:[]
 *     requestBody:
 *       require: true
 *       content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      video_url: "string"
 *     responses:
 *       200:
 *         description: 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                missions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       location_index:
 *                         type: integer
 *                         example: 1
 *                       mission_count:
 *                         type: integer
 *                         example: 5
 *       400:
 *         description: 잘못된 요청
 *       401:
 *         description: 인증 실패
 */
missions_router.post('/start', missions_controller.startMission)

missions_router.post('/complete/:mission_index', uploadPhotoMiddleware, missions_controller.completeMission)

export default missions_router
