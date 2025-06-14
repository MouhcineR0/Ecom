import axios from "axios";

const AxiosInstance = axios.create({
    // deployment
    // withCredentials: true,
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
    headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + localStorage.getItem('tk')
    }
});

export default AxiosInstance;