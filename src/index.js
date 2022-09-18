import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import store from './redux/reduxStore'
import { Provider } from 'react-redux'

const rerenderEntireTree = () => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	)
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)
