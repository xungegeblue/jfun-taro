import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import {IndexProps, IndexState} from './index.interface'
import './index.scss'
import MySwiper from "../../components/MySwiper";
import {connect} from "@tarojs/redux";

// import {  } from '../../components'

@connect(({index}) => ({
    ...index,
}))
class Index extends Component<IndexProps, IndexState> {
    config: Config = {
        navigationBarTitleText: '首页'
    }

    constructor(props: IndexProps) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

        // @ts-ignore
        this.props.dispatch({
            type: 'index/getBanner',
            payload: {}
        })
    }

    render() {
        const {banner} = this.props;
        return (
            <View className='fx-index-wrap'>
                <MySwiper banner={banner}/>
                {/*{*/}
                {/*    banner && banner.map(item => {*/}
                {/*        return (*/}
                {/*            <View className='index-title'>{item.image_src}</View>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
            </View>
        )
    }
}

export default Index
