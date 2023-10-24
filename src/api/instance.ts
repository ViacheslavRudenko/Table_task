import axios from "axios";

const prodUrl: string = "https://technical-task-api.icapgroupgmbh.com/api/";

const instance = axios.create({
    baseURL: `${prodUrl}`,
});

export default instance;