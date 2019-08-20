import JfunRequest from "../../utils/request";

export const testApi = async () => {
    let getList = await JfunRequest.getRequest('/getList')
    console.log('getList')
    console.log(getList)
    return getList
}

