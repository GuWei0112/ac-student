import axios from 'axios'

const API = 'http://localhost:8080'

const req = axios.create({
    baseURL: API,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "Access-Control-Allow-Credentials": 'true'
    }
})

export default async(url, params) => {
    return await req.post(API + url, params)
        .then(result => {
            return result
        }).catch(err => {
            console.log(err)
        })
}