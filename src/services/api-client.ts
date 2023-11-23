import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'c746bb06b24d49bcb7837e01d76cdea0'
    }
})