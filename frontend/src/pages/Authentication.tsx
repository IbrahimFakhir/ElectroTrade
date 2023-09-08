import { useState } from "react";
import { Register, Login } from "../features/authentication";

const Authentication = () => {
    const [hasAccount, setHasAccount] = useState<boolean>(true);

    return (
        <div className="flex justify-center items-center h-full">
            { !hasAccount &&  <Register setHasAccount={setHasAccount} /> }
            { hasAccount && <Login setHasAccount={setHasAccount} /> }
        </div>
    )
}

export default Authentication;
