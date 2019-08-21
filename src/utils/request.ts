import Taro from "@tarojs/taro";
import {ISMOCK, MAINHOST, MOCKHOST, ONLINEHOST} from "../config";
import {commonParame} from "../config/requestConfig";


// 封装请求


declare type Methohs = "GET" | "OPTIONS" | "HEAD" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | "POST";
declare type Headers = { [key: string]: string };
declare type Datas = { method: Methohs; [key: string]: any; };

interface Options {
    url: string;
    host?: string;
    method?: Methohs;
    data?: Datas;
    header?: Headers;
}

class JfunRequest {

    /**
     * 基于 Taro.request 的 request 请求
     *
     * */
    static async request(opts: Options) {
        return Taro.request(opts).then(res => {
            console.log(res)
            if (res.statusCode != 200) {
                throw new Error('请求失败!')
            } else {
                return res.data
            }
        });
    }


    /**
     * 开始处理options
     * @param opts
     * @param data
     * @param method
     */
    static conbineOptions(opts, data: Datas, method?: Methohs): Options {
        console.log('opts',opts)
        typeof opts === 'string' && (opts = {url: opts})
        let baseUrl = ISMOCK ? MOCKHOST : ONLINEHOST

        return {
            data: {...commonParame, ...opts.data, ...data},
            method: opts.method || data.method || method || 'GET',
            url: `${baseUrl || MAINHOST}${opts.url}`
        }
    }

    /**
     * get 方法
     * @param url
     */
    public static async getRequest(url: string) {
        let options = JfunRequest.conbineOptions({url}, {method: 'GET'})
        return JfunRequest.request(options)
    }

    /**
     * post方法
     * @param url
     * @param data
     */
    public static postRequest(url: string, data: Datas) {
        let options = JfunRequest.conbineOptions({url}, {...data, method: 'POST'})
        return JfunRequest.request(options)
    }


}

export default JfunRequest
