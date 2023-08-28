import axios from "../lib/axios";
import useAuth from "./useAuth";
import { REFRESH_URL } from "../lib/api-paths";

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get(
            REFRESH_URL,
            {
                withCredentials: true
            }
        );
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);

            return { ...prev, accessToken: response.data.accessToken }
        });
        return response.data.accessToken;
    }
    
    return refresh;
}

export default useRefreshToken;
