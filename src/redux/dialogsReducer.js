const dialogsReducer = (state, action) => {


   switch (action.type) {
      case 'CHANGE_NEW_MESSAGE_TEXT':
         state.newMessageText = action.messageText
         return state
      case 'SEND_MESSAGE':
         state.messagesData.push({
            id: 4,
            userMessage: state.newMessageText
         })
         state.newMessageText = ''
         return state
      default:
         return state
   }
}

export const newMessageCreator = (type, messageText) => {
   return {
      type: type,
      messageText: messageText ? messageText : null
   };
};

export default dialogsReducer