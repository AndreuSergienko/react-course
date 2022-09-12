const profileReducer = (state, action) => {

   switch (action.type) {
      case 'ADD_POST':
         let newPost = {
            id: 4,
            post: state.newPostText,
            likes: 0,
         }
         state.postsData.push(newPost)
         state.newPostText = ''
         return state
      case 'CHANGE_NEW_POST_TEXT':
         state.newPostText = action.postMessage
         return state
      default:
         return state
   }
}

export const newPostCreator = (type, postMessage) => {
   return {
      type: type,
      postMessage: postMessage ? postMessage : null,
   };
};

export default profileReducer