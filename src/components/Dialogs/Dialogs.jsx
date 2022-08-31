import React from 'react'
import dialogs from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {
	return (
		<div className={dialogs.dialogsWrapper}>
			<h3 className={dialogs.dialogsTitle}>Dialogs</h3>
			<div className={dialogs.grid}>
				<div className={dialogs.dialogs}>
					{props.state.dialogsData.map((dialog) => {
						return <Dialog userName={dialog.userName} id={dialog.id} />
					})}
				</div>
				<div className={dialogs.messages}>
					{props.state.messagesData.map((message) => {
						return <Message message={message.userMessage} />
					})}
				</div>
			</div>
		</div>
	)
}

export default Dialogs
