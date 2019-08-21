import Taro, {Component, Config} from '@tarojs/taro'
import {Icon, View} from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import {UserProps, UserState} from './index.interface'
import './index.scss'
import {AtAvatar,AtGrid,AtListItem,AtList} from 'taro-ui'
// import {  } from '../../components'

// @connect(({ user }) => ({
//     ...user,
// }))

class User extends Component<UserProps, UserState> {
    config: Config = {
        navigationBarTitleText: '页面标题'
    }

    constructor(props: UserProps) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <View className='user-wrap'>
                <View className='user-wrap-main at-row'>

                    <View className='at-col user-wrap-left'>
                        <View className='login_name'>请登录 ></View>
                        <View className='login_txt'>好品质，好购物</View>
                    </View>
                    <View className='at-col'>
                        <AtAvatar className='logo_img' circle
                                  image='http://qiuniu.xiejx.cn/avatar10.jpeg'></AtAvatar>
                    </View>
                </View>
                {/*待支付、代发货、已发货、代归还、全部订单*/}
                <View className='user-nav'>
                    <AtGrid data={
                        [
                            {
                                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                                value: '领取中心'
                            },
                            {
                                image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                                value: '找折扣'
                            },
                            {
                                image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                                value: '领会员'
                            },
                            {
                                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                                value: '新品首发'
                            },
                            {
                                image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                                value: '领京豆'
                            },
                            {
                                image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                                value: '手机馆'
                            }
                        ]
                    } />
                </View>
                {/*收获地址、优惠券、关于*/}
                <View className='user-subject'>
                    <AtList>
                        <AtListItem
                            title='收获地址'
                            arrow='right'
                            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                        />
                        <AtListItem
                            title='优惠券'
                            note='优惠'
                            arrow='right'
                            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                        />
                        <AtListItem
                            title='关于'
                            note='正版软件'
                            extraText='V1.0'
                            arrow='right'
                            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                        />
                    </AtList>
                </View>
            </View>
        )
    }
}

export default User
