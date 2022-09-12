import React from 'react';
import dialogs from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { newMessageCreator } from '../../redux/dialogsReducer';

const Dialogs = (props) => {
	let newMessage = React.createRef();

	let changeMessageText = () => {
		let messageValue = newMessage.current.value;
		props.dispatch(
			newMessageCreator('CHANGE_NEW_MESSAGE_TEXT', messageValue)
		);
	};

	let sendMessage = () => {
		props.dispatch(newMessageCreator('SEND_MESSAGE'));
	};

	return (
		<div className={dialogs.dialogsWrapper}>
			<h3 className={dialogs.dialogsTitle}>Dialogs</h3>
			<div className={dialogs.grid}>
				<div className={dialogs.dialogs}>
					{props.dialogsPage.dialogsData.map((dialog) => {
						return <Dialog userName={dialog.userName} id={dialog.id} />;
					})}
				</div>
				<div className={dialogs.messages}>
					<div>
						{props.dialogsPage.messagesData.map((message) => {
							return <Message message={message.userMessage} />;
						})}
					</div>
					<div>
						<textarea
							ref={newMessage}
							value={props.dialogsPage.newMessageText}
							className={dialogs.textarea}
							placeholder='Type your message'
							onChange={changeMessageText}
						></textarea>
						<button
							type='button'
							onClick={sendMessage}
							className={dialogs.button}
						>
							Send Message
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
