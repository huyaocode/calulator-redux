import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './Redux/Store/store';
import RouteConfig from './Router/router';//路由配置

ReactDOM.render(
	<Provider store={store}>
	    {RouteConfig}
	</Provider>,
	document.getElementById('root')
);