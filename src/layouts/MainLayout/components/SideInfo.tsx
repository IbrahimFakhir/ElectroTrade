import useAuth from "../../../hooks/useAuth";

const SideInfo = () => {
    const { auth } = useAuth();

    return (
        <div className="h-full flex flex-col justify-start items-center">
            <div className="text-xl font-semibold flex justify-center items-center bg-customGrey w-20 h-20 rounded-full">
                { auth.name.charAt(0) }{ auth.name.split(" ")[1][0] }
            </div>
            <span className="font-roboto mt-1">{auth.name}</span>
        </div>
    )
}

export default SideInfo;
