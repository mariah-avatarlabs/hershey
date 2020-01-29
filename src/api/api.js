import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: '/api/',
        crossdomain: true,
        withCredentials: false,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        }
    })
}