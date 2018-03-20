import getanswer from './funcCalculator/dealExpression.js'

//计数器reducer函数
export const counter = (state = { count: 0 }, action) => {
    let count = state.count
    switch (action.type) {
      case 'INCREASE':
            return { count: count + 1 }
      case 'DECREASE':
          return { count: count - 1 }
      default:
        return state
    }
}

//计算器reducer函数
export const calculate = (state = {expression: '', equalFlag: true, log:[]}, action) =>{
	switch (action.type) {
		case 'EXPRESSION':
            let _expression = state.equalFlag ? action.expression : state.expression + action.expression;
			return { ...state, expression: _expression, equalFlag: false}
        case 'GETANSWER':
			return  getanswer(state);
		default:
			return state
	}
}
/**
 * Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。
 * Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
 */