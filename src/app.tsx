import Taro, {Component, Config} from '@tarojs/taro'
import "@tarojs/async-await";
import {Provider} from "@tarojs/redux";
import dva from './utils/dva';
import './utils/request';
import {globalData} from './utils/common';

import models from './models'
import Index from './pages/index'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5') {
//     require('nerv-devtools')
//}


import 'taro-ui/dist/style/index.scss' // 引入组件样式 - 方式一


const dvaApp = dva.createApp({
    initialState: {},
    models: models,
})


const store = dvaApp.getStore();

class App extends Component {

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
        pages: [
            'pages/index/index',
            'pages/car/index',
            'pages/user/index',

        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black'
        },
        tabBar: {
            list: [
                {
                    pagePath: 'pages/index/index',
                    text: '首页',
                    iconPath: './assets/images/tab/home.png',
                    selectedIconPath: './assets/images/tab/home-active.png'
                },
                {
                    pagePath: 'pages/car/index',
                    text: '衣袋',
                    iconPath: './assets/images/tab/cart.png',
                    selectedIconPath: './assets/images/tab/cart-active.png',
                },
                {
                    pagePath: 'pages/user/index',
                    text: '我的',
                    iconPath: './assets/images/tab/user.png',
                    selectedIconPath: './assets/images/tab/user-active.png',
                },
            ],
            color: '#333',
            selectedColor: '#333',
            backgroundColor: '#fff',
            borderStyle: 'white',
        }
    }

    /**
     *
     *  1.小程序打开的参数 globalData.extraData.xx
     *  2.从二维码进入的参数 globalData.extraData.xx
     *  3.获取小程序的设备信息 globalData.systemInfo
     */
    async componentDidMount() {
        // 获取参数
        const referrerInfo = this.$router.params.referrerInfo
        const query = this.$router.params.query
        !globalData.extraData && (globalData.extraData = {})
        if (referrerInfo && referrerInfo.extraData) {
            globalData.extraData = referrerInfo.extraData
        }
        if (query) {
            globalData.extraData = {
                ...globalData.extraData,
                ...query
            }
        }

        // 获取设备信息
        const sys = await Taro.getSystemInfo()
        sys && (globalData.systemInfo = sys)
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    componentDidCatchError() {
    }

    render() {
        // @ts-ignore
        return (
            <Provider store={store}>
                <Index banner={[]}/>
            </Provider>
        )
    }
}

Taro.render(<App/>, document.getElementById('app'))
