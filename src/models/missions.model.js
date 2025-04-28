import fs from 'fs'

export default class missions_controller {
    static async upload_video(req, res) {
        fs.writeFileSync('temp_video.mp4', req.file.buffer)

        res.json({
            message: '비디오업로드 성공',
            file_info: req.file,
        })
    }
}
