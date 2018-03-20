import { connect } from 'react-redux'
import Counter from '../../components/Counter.js'
import {increaseAction, decreaseAction} from '../Actions/actionsCounter.js'
/*
mapStateToProps是一个函数。它的作用就是像它的名字那样，建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
*/
function mapStateToProps(state) {
	return {
		value: state.counter.count
	}
}
/*
mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。
*/
function mapDispatchToProps(dispatch) {
	return {
		onIncreaseClick: () => {dispatch(increaseAction)} ,
		onDecreaseClick: () => {dispatch(decreaseAction)}
	}
} 

// Connected Component
const AppCalculator = connect(
 	mapStateToProps,
  	mapDispatchToProps
)(Counter)

export default AppCalculator

/**
 * container : 目的是如何工作(获取数据, 状态更新)
 * 读取数据: 获取state
 * 修改数据: 派发Action
 */
 /*
connect方法接受两个参数：mapStateToProps和mapDispatchToProps。
它们定义了 UI 组件的业务逻辑。前者负责输入逻辑，即将state映射到 UI 组件的参数（props）
后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action.
 */