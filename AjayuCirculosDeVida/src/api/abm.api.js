import axios from 'axios'

export const getAllTasks = () => {
    return axios.get('http://localhost:8000/ajayuAPP/api/v1/Articulos/')
}