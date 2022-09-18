import Dialogs from './Dialogs'
import { newMessageCreator } from '../../redux/dialogsReducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogsData,
		messages: state.dialogsPage.messagesData,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateMessageText: (messageValue) => {
			dispatch(newMessageCreator('CHANGE_NEW_MESSAGE_TEXT', messageValue))
		},
		createMessage: () => {
			dispatch(newMessageCreator('SEND_MESSAGE'))
		},
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
