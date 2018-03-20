import React from 'react';
import {BrowserRouter as Router,Route,NavLink as Link} from 'react-router-dom';
import AppCalculator from '../Redux/Containers/calculater.js'
import AppCounter from '../Redux/Containers/counter.js'
import './router.css'


const active = {background:'#045757',color:'#fff',textDecoration:'none'};
const RouteConfig = (
    <Router>
        <div>

                <ul className='div_class_ul'>
                    <li><Link to="/counter" activeStyle={active}>1.计数器</Link></li>
                    <li><Link to="/calculator" activeStyle={active}>2.计算器</Link></li>
                </ul>
            <Route path="/counter" component={AppCounter}/>
            <Route path="/calculator" component={AppCalculator} exact/>
        </div>
    </Router>
);
export default RouteConfig;