import { newPostCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updatePostMessage: (postMessage) => {
			dispatch(newPostCreator('CHANGE_NEW_POST_TEXT', postMessage))
		},
		addPost: () => {
			dispatch(newPostCreator('ADD_POST'))
		},
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
