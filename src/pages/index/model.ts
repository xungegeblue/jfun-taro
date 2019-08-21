// import Taro from '@tarojs/taro';
import * as indexApi from './service';

export default {
    namespace: 'index',
    state: {
        banner:[]
    },

    effects: {
        *getBanner(_,{call, put}) {
            const {data} = yield call(indexApi.getBanner)
            console.log('banner--->')
            console.log(data)
            yield put({
                type: 'save',
                payload: {
                    banner : data.banner
                },
            })
        }
    },

    reducers: {
        save(state, {payload}) {
            console.log('layload', payload)
            return {...state, ...payload};
        },
    }

}

