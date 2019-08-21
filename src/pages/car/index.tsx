
    import Taro, { Component, Config } from '@tarojs/taro'
    import { View } from '@tarojs/components'
    // import { connect } from '@tarojs/redux'
    // import Api from '../../utils/request'
    // import Tips from '../../utils/tips'
    import { CarProps, CarState } from './index.interface'
    import './index.scss'
    // import {  } from '../../components'

    // @connect(({ car }) => ({
    //     ...car,
    // }))

    class Car extends Component<CarProps,CarState > {
    config:Config = {
        navigationBarTitleText: '页面标题'
    }
    constructor(props: CarProps) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        
    }

    render() {
        return (
        <View className='fx-car-wrap'>
            购物车
        </View>
        )
    }
    }
    export default Car
