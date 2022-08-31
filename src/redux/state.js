let state = {
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
	},
	profilePage: {
		postsData: [
			{ id: 1, post: 'Hello, im from post 1', likes: 10 },
			{ id: 2, post: 'Yeah, but im from the second one', likes: 13 },
			{ id: 3, post: 'Did you forget bout me? Im three', likes: 7 },
		],
		newPostText: 'it-kamasutra.com',
	},
}

let rerenderEntireTree = () => {}

export const addPost = () => {
	let newPost = {
		id: 4,
		post: state.profilePage.newPostText,
		likes: 0,
	}
	state.profilePage.postsData.push(newPost)
	rerenderEntireTree()
	state.profilePage.newPostText = ''
}

export const changeNewPostText = (postMessage) => {
	state.profilePage.newPostText = postMessage
	rerenderEntireTree()
}

export const subscribe = (observer) => {
	rerenderEntireTree = observer
}

export default state
