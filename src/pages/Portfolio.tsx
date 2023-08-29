import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import { pages } from "../utils/pages";

const Portfolio = () => {
    const [demo, setDemo] = useState();
    const [demoBool, setDemoBool] = useState<boolean>(false);

    const navigate = useNavigate();
    const location = useLocation();

    const { auth } = useAuth();

    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        console.log(auth.accessToken);

        let isMounted = true;
        const controller = new AbortController;

        const getDemo = async () => {
            try {
                const response = await axiosPrivate.get(
                    '/user/data',
                    {
                        signal: controller.signal
                    }
                );
                console.log(response?.data);
                isMounted && setDemo(response?.data.data);
            }
            catch (err) {
                console.log(err);
                navigate(pages.get("authentication")!.path, { state: { from: location }, replace: true });
            }
        }

        getDemo();

        return () => {
            isMounted = false;
            controller.abort();
        }

    }, [demoBool])
    
    return (
        <>
            <div>Portfolio</div>
            <button onClick={() => setDemoBool(prev => !prev)}>test</button>
            <p>{demo}</p>
        </>
    )
}

export default Portfolio;
