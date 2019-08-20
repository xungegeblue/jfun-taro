
    // import Taro from '@tarojs/taro';
    import * as jfunApi from './service';
    export default {
        namespace: 'jfun',
        state: {
            data:[],
        },
        
        effects: {
            *getJfunList({ payload },{call, put}){
                const { error_code, result} = yield call(jfunApi.testApi,{
                    ...payload
                })
                console.log('数据接口返回',result);

                if (error_code===0) {
                    yield put({
                        type: 'save',
                        payload: {
                            data:result.data
                        },
                    })
                }
            }
        },
        
        reducers: {
            save(state, { payload }) {
                console.log('layload',payload)
                return { ...state, ...payload };
            },
        }
    
    }

