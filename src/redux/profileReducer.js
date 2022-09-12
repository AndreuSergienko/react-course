let initialState = {
   postsData: [
      { id: 1, post: 'Hello, im from post 1', likes: 10 },
      { id: 2, post: 'Yeah, but im from the second one', likes: 13 },
      { id: 3, post: 'Did you forget bout me? Im three', likes: 7 },
   ],
   newPostText: 'it-kamasutra.com',
}

const profileReducer = (state = initialState, action) => {

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