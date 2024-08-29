import axios from "axios";

export default AxiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
    headers: {
        'Content-Type': 'application/json',
    }
});