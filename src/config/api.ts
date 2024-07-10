import axios from "axios";
import toast from "react-hot-toast";

export const baseUrl = "https://g-users-server.onrender.com";

export const fetchUserAPI = async (username: string) => {
    try {
        const res = await axios.post(`${baseUrl}/users`, { username });
        // console.log(res.data);
        return res.data;
    } catch (error) {
        toast.error("Something went wrong");
    }
}