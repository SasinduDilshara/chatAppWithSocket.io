import React, { Component } from 'react'
import io from 'socket.io-client'
import { USER_CONNECTED, LOGOUT } from '../Events.js'
import LoginForm from './LoginForm'
import { Socket } from 'dgram'
import ChatContainer from './chatContainer'
const socketUrl = 'http://localhost:3231/'  // backend link

export default class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            socket: null,
            user: null
        };
    }
    componentWillMount() {
        this.initSocket()
    }

    initSocket = () => {
        const socket = io(socketUrl)
        socket.on('connect', () => {
            console.log("Connected")
        })

        this.setState({
            socket
        })
        console.log(this.state.socket)

    }


    //login
    setUser = (user) => {
        const { socket } = this.state
        socket.emit(USER_CONNECTED, user)
        this.setState({ user: user, socket: socket })

    }

    logout = () => {

        const { socket } = this.state
        socket.emit(LOGOUT)
        this.setState({ user: null, socket: socket })

    }

    render() {
        const { title } = this.props
        const { socket, user } = this.state
        return (
            <div className="container">
                {
                    !user ?
                        <LoginForm socket={this.state.socket} setUser={this.setUser} />
                        :
                        <ChatContainer socket={Socket} user={user} logout={this.logout} />
                }
            </div>
        )
    }
}
