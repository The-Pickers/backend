import axios from 'axios'

export const checkAI = async (image) => {
    const url = 'http://34.46.122.62:8000/analyze'

    try {
        const result = await axios({
            method: 'POST',
            url: url,
            data: {
                image_base64: image,
            },
        })
        return result.data
    } catch (err) {
        console.log(err)
        return err
    }
}
