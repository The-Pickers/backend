import { Router } from 'express'
import maps_controller from '../controllers/maps.controller.js'
const maps_router = Router()
/**
 * @swagger
 * /maps:
 *   get:
 *     summary: 지도 조회
 *     description: 지역별로 수행한 미션의 수를 배열의 형태로 전달한다.
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
maps_router.get('/', maps_controller.map)

/**
 * @swagger
 * /maps/{location_index}:
 *   get:
 *     summary: 지도 지역 조회
 *     description: 특정 지역에 해당하는 미션 정보만 알려준다
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: location_index
 *         required: true
 *         schema:
 *           type: integer
 *         description: 지역 인덱스
 *     responses:
 *       200:
 *         description: 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
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
maps_router.get('/:location_index', (req, res) => {})

export default maps_router
