import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(props) {
	return (
		<BrowserRouter>
			<div className='layout'>
				<Header />
				<Sidebar />
				<div className='content-wrapper'>
					<Routes>
						<Route
							path='/profile'
							element={
								<Profile
									profilePage={props.state.profilePage}
									dispatch={props.dispatch}
								/>
							}
						/>
						<Route
							path='/dialogs'
							element={
								<Dialogs
									dialogsPage={props.state.dialogsPage}
									dispatch={props.dispatch}
								/>
							}
						/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
