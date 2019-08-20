import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {connect} from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import {JfunProps, JfunState} from './jfun.interface'
import './jfun.scss'

// import {  } from '../../components'

@connect(({jfun}) => ({
    ...jfun,
}))

class Jfun extends Component<JfunProps, JfunState> {
    config: Config = {
        navigationBarTitleText: '页面标题'
    }

    constructor(props: JfunProps) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        console.log('getJfunList')
        this.getList()
    }

    async getList() {
        // @ts-ignore
        await this.props.dispatch({
            type: 'jfun/getJfunList',
            payload: {}
        })
    }

    render() {
        const {data} = this.props
        console.log('this.props===>>', data);

        return (
            <View className='fx-jfun-wrap'>
                {
                    data && data.map(item => {
                        return (
                            <View className='index-title'>{item.title}</View>
                        )
                    })
                }
            </View>
        )
    }
}

export default Jfun
