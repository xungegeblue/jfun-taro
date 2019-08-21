import JfunRequest from "../../utils/request";

export const getBanner = () => {
    return JfunRequest.getRequest('/banner')
}

