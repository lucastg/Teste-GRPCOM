import config from "../config/config";
import { callEndPoint } from "../library/clientHttp";
import { methods } from "../library/enum/index"

export async function getProgrmas(data: Date) {
    const res = await callEndPoint({
        method: methods.GET,
        url: config().api_globo,
        params: {
            "Data": data
        }
    })
    return res.data.programme.entries;
}