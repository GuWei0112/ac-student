import axios from 'axios'

const API = 'http://localhost:8080/angel'

const req = axios.create({
    baseURL: API,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "Access-Control-Allow-Credentials": 'true'
    }
})

export default async (url, params) => {
    return await req.post(API + url, params)
        .then(result => {
            return result
        }).catch(err => {
            console.log(err)
        })
}

export const GET_API = async (url) => {
    return await req.get(API + url)
        .then(result => {
            return result
        }).catch(err => {
            console.log(err)
        })
}