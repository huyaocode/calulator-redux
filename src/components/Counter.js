import React, { Component } from 'react'
import PropTypes from 'prop-types'
// React component
class Counter extends Component {
  render() {
		let { value, onIncreaseClick, onDecreaseClick } = this.props
  	return (
	    <div>
	    	<h1>{value}</h1>
	      <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={onDecreaseClick}>Decrease</button>
	    </div>
    )
  }
}

Counter.propTypes = {
  	value: PropTypes.number.isRequired,
  	onIncreaseClick: PropTypes.func.isRequired,
    onDecreaseClick: PropTypes.func.isRequired
}

export default Counter