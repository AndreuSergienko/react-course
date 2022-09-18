import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/Profile/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'

function App(props) {
	return (
		<BrowserRouter>
			<div className='layout'>
				<Header />
				<Sidebar />
				<div className='content-wrapper'>
					<Routes>
						<Route path='/profile' element={<Profile />} />
						<Route path='/dialogs' element={<DialogsContainer />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
