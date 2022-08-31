import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import state from './redux/state'
import { addPost, changeNewPostText, subscribe } from './redux/state'

let page = {
	title: 'reactCourse',
	_content: '',
	setContent(content) {
		this._content = content
	},
	getContent() {
		return this._content
	},
}

page.setContent('hello from react!!))')

export const rerenderEntireTree = () => {
	ReactDOM.render(
		<App
			state={state}
			addPost={addPost}
			changeNewPostText={changeNewPostText}
		/>,
		document.getElementById('root')
	)
}

rerenderEntireTree()

subscribe(rerenderEntireTree)
