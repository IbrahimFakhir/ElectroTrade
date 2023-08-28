import axios from "axios";
import { BASE_URL } from "./api-paths";

export default axios.create({
    baseURL: BASE_URL
});
