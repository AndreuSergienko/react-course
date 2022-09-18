let initialState = {
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
	newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_NEW_MESSAGE_TEXT':
			state.newMessageText = action.messageText
			return state
		case 'SEND_MESSAGE':
			state.messagesData.push({
				id: state.messagesData.length + 1,
				userMessage: state.newMessageText,
			})
			state.newMessageText = ''
			return state
		default:
			return state
	}
}

export const newMessageCreator = (type, messageText = null) => {
	return {
		type: type,
		messageText: messageText,
	}
}

export default dialogsReducer
