import React, { Component } from 'react'
import SideBar from './SideBar'
export default class chatContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			chats: [],
			activeChat: null

		}
		this.setActiveChat=this.setActiveChat.bind(this)
	}

	setActiveChat=(Activechat)=>{
		this.setState({Activechat})
	}

	render() {
		const { user, logout } = this.props
		const { chats,activeChat } = this.state
		return (
			<div className='container'>
				<SideBar
					logout={logout}
					chats={chats}
					user={user}
					activeChat={activeChat}//chat that looked in
					setActiveChat={this.setActiveChat}
				/>
			</div>
		)
	}
}


























