import axios from "axios"




const instance = axios.create({
    baseURL: 'http://localhost:4000/'
})

const getPost = () => instance.get('/posts')


const api ={
    getPost
}
export default api