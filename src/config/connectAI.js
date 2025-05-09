import axios from 'axios'

export const getMessage = async (image) => {
    const url = process.env.AISERVER

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
        return err
    }
}
