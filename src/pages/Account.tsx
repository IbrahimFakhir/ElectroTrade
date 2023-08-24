import { Link } from "react-router-dom";
import { pages } from "../utils/pages";

const Account = () => {
    return (
        <div>
            <div>Account</div>
            <Link to={pages.get("admin")!.path}>
				Go to Admin
			</Link>
        </div>
    )
}

export default Account;
