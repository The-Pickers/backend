import multer from 'multer'
import path from 'path'
const __dirname = path.resolve()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadspath = path.join(__dirname, 'uploads/')
        cb(null, uploadspath) // 저장 폴더
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        cb(null, `${Date.now()}_${file.fieldname}${ext}`)
    },
})

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 1000 * 1024 * 1024, // 최대 1GB
    },
    // fileFilter: (req, file, cb) => {
    //     if (file.mimetype.startsWith('video/')) {
    //         cb(null, true)
    //     } else {
    //         cb(new Error('Only video files are allowed!'))
    //     }
    // },
})
export const uploadPhotoMiddleware = (req, res, next) => {
    try {
        upload.single('photo')(req, res, (err) => {
            if (err) {
                console.error('업로드 중 에러 발생:', err)
                return next(err) // 에러를 다음 미들웨어로 넘긴다
            }
            next() // 문제 없으면 다음으로 넘어감 (컨트롤러 호출 쪽)
        })
    } catch (error) {
        console.error('시스템 에러 발생:', error)
        next(error) // 시스템 에러도 넘긴다
    }
}
