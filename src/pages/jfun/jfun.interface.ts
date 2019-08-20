
/**
 * jfun.state 参数类型
 *
 * @export
 * @interface JfunState
 */
export interface JfunState {}

/**
 * jfun.props 参数类型
 *
 * @export
 * @interface JfunProps
 */


export interface JfunProps {
    data ?: Array<DataInterface>
}

export interface DataInterface {
    des:string,
    lunar:string,
    thumbnail_pic_s:string,
    title:string,
    _id:string
}
