import { connect } from 'react-redux'
import Calculator from '../../components/Calculator'
import {concatExpression, getAnswer} from '../Actions/actionsCalculator.js'
/*
mapStateToProps是一个函数。它的作用就是像它的名字那样，建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
*/
function mapStateToProps(state) {
	return {
		value: state.calculate.expression,
		log: state.calculate.log
	}
}
/*
mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。
*/
function mapDispatchToProps(dispatch) {
	return {
		expressionClick: (e) => { dispatch(concatExpression(e.target.innerHTML)) } ,
		getAnswerClick: (e)=> { dispatch(getAnswer(e.target.innerHTML)) }
	}
}

// Connected Component
const AppCalculator = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator)

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

/**
 * 容器组件
负责管理数据和业务逻辑，不负责 UI 的呈现
带有内部状态
使用 Redux 的 API
总之，只要记住一句话就可以了：UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑。
你可能会问，如果一个组件既有 UI 又有业务逻辑，那怎么办？回答是，将它拆分成下面的结构：外面是一个容器组件，里面包了一个UI 组件。前者负责与外部的通信，将数据传给后者，由后者渲染出视图。
 */