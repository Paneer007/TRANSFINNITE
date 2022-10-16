const axios = require("axios")
const captchaSolver = async(resp) =>{
    result = await axios.post("flaskserver/captcha")
    return result
}
const captchaSolverApi = async(image_data)=>{
    return new Promise(async(resolve,reject)=>{
        image_data = image_data.replace(/^data:image\/(png|jpg|jpeg|gif);base64,/, "")
        const params = {			
            userid:process.env.CAPTCHA_USERID,
            apikey:process.env.CAPTCHA_APIKEY,
            data:   image_data,
            case : 'mixed'
        }
    	const url = "https://api.apitruecaptcha.org/one/gettext"
        try{
            const resp = await axios.post(url,params)
            let data = resp.data.result
            resolve(data)
        }catch{
            reject(new Error('image recognition failed'))
        }
    })
}
module.exports= {captchaSolver,captchaSolverApi};
