import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"

let store = {
	_state: {
		dialogsPage: {
			messagesData: [
				{ id: 1, userMessage: 'Hi!Bro' },
				{ id: 2, userMessage: 'How is it going?' },
				{ id: 3, userMessage: 'Okay!See you dude' },
			],
			dialogsData: [
				{ id: 1, userName: 'Andreu' },
				{ id: 2, userName: 'Dima' },
				{ id: 3, userName: 'Sasha' },
			],
			newMessageText: ''
		},
		profilePage: {
			postsData: [
				{ id: 1, post: 'Hello, im from post 1', likes: 10 },
				{ id: 2, post: 'Yeah, but im from the second one', likes: 13 },
				{ id: 3, post: 'Did you forget bout me? Im three', likes: 7 },
			],
			newPostText: 'it-kamasutra.com',
		},
	},
	getState() {
		return this._state
	},
	_callSubscriber() { },
	subscribe(observer) {
		this._callSubscriber = observer
	},
	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

		this._callSubscriber()
	}
}

export default store
