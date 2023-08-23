import axios from "axios";
import BASE_URL from "./base-url";

export default axios.create({
    baseURL: BASE_URL
});
