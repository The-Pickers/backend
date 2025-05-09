import axios from 'axios'

export const getResult = async (image) => {
    const url = process.env.AISERVER+"analyze"

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

export const getMessage =  async (carbon_reduction) => {
    const url = process.env.AISERVER+"main-message"

    try {
        const result = await axios({
            method: 'POST',
            url: url,
            data : {
                carbon_reduction : carbon_reduction
            }
        })
        return result.data
    } catch (err) {
        return err
    }
}
