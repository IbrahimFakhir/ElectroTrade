import axios from "../lib/axios";
import useAuth from "./useAuth";
import { REFRESH_URL } from "../lib/api-paths";

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.post(
            REFRESH_URL,
            null,
            {
                withCredentials: true
            }
        );
        console.log(`refresh data: ${response.data.accessToken}`);

        setAuth(prev => {
            /* console.log(JSON.stringify(prev)); */

            return { ...prev, accessToken: response.data.accessToken }
        });
        return response.data.accessToken;
    }
    
    return refresh;
}

export default useRefreshToken;
