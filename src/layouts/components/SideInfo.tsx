import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';

const SideInfo = () => {
    const { auth } = useContext(AuthContext);

    return (
        <div className="h-full flex flex-col justify-start items-center">
            <div className="text-xl font-semibold flex justify-center items-center bg-background w-20 h-20 rounded-full">
                { auth.firstName.charAt(0) }{ auth.lastName.charAt(0) }
            </div>
            <span className="font-roboto mt-1">{auth.firstName} {auth.lastName}</span>
        </div>
    )
}

export default SideInfo;
