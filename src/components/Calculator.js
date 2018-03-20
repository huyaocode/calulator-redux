import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  './css/style.css'

const numbers = ['7','8','9','4','5','6','1','2','3','0','.'];
const brackets = [' ( ',' ) '];
const operates = [' + ',' - ',' * ',' / '];

class Calculator extends Component {
    render() {
        const { value, log, expressionClick, getAnswerClick } = this.props
        return (
            <div>
                <div className="calculator">
                    <div>
                        <input className="screen" value={value} />    
                    </div>
                    <div className="number button" >
                        {numbers.map((number)=>
                            <span key={number} onClick={expressionClick}>
                                {number}
                            </span>
                        )}
                        {brackets.map((bracket)=>
                            <span key={bracket} onClick={expressionClick} className="smallButton"> 
                                {bracket}
                            </span>
                        )}
                    </div>
                    <div className="operate button">
                        {operates.map((operate)=>
                            <span key={operate} onClick={expressionClick}>
                                {operate}
                            </span>
                        )}
                        <span onClick={getAnswerClick}> = </span>
                    </div>
                </div>
                <div className="div_class_log">
                    <h2>记录</h2>
                    <ol type="a">
                        {
                            log.map((item)=>
                            <li key ={item}>
                                {item}
                            </li>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

Calculator.PropTypes = {
    value: PropTypes.string.isRequired,
    log: PropTypes.array.isRequired,
    expressionClick: PropTypes.func.isRequired,
    getAnswerClick: PropTypes.func.isRequired
}

export default Calculator
