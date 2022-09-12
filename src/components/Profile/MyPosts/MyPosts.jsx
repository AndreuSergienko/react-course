import React from 'react';
import myposts from './MyPosts.module.css';
import Post from './Post/Post';
import { newPostCreator } from '../../../redux/profileReducer';

const MyPosts = (props) => {
	let newPost = React.createRef();

	const createNewPost = () => {
		props.dispatch(newPostCreator('ADD_POST'));
	};

	const onPostChange = () => {
		let postMessage = newPost.current.value;
		props.dispatch(newPostCreator('CHANGE_NEW_POST_TEXT', postMessage));
	};

	return (
		<div className={myposts.postsWrapper}>
			<h3 className={myposts.title}>My posts</h3>
			<form className={myposts.form}>
				<input
					type='text'
					placeholder='your news...'
					className={myposts.input}
					ref={newPost}
					value={props.newPostText}
					onChange={onPostChange}
				/>
				<button
					type='button'
					onClick={createNewPost}
					className={myposts.btnSend}
				>
					Add post
				</button>
			</form>
			<div className={myposts.posts}>
				{props.posts.map((post) => {
					return <Post post={post.post} likes={post.likes} />;
				})}
			</div>
		</div>
	);
};

export default MyPosts;
