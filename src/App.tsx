import React, {useEffect} from 'react'
import './App.scss'
import Header from "./Components/header/Header"
import Footer from "./Components/footer/Footer"
import Body from './Components/body/Body'
import useWebSocket, {ReadyState} from "react-use-websocket"
import {useDispatch, useSelector} from "react-redux";
import {IDispatch, IStore} from "./Store/store";
import {messages, setStoreMessages} from "./Store/Slices/Messages";


const App = () => {
    const dispatch = useDispatch<IDispatch>()
    const _messages: any = useSelector<IStore>(messages)
    const socketUrl: any = process.env.REACT_APP_WEBSOCKET_URL

    const {
        sendMessage,
        lastMessage,
        readyState,
    } = useWebSocket(socketUrl)

    const handleClickSendMessage = (message: string) => {
        sendMessage(message)
        let arr = [..._messages.conversation]
        arr.push({text: message, isMine: true})
        dispatch(setStoreMessages({conversation: arr}))
    }

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState]

    useEffect(() => {
        let arr = [..._messages.conversation]
        lastMessage?.data.length > 0 && arr.push({text: lastMessage?.data, isMine: false})
        dispatch(setStoreMessages({conversation: arr}))
    }, [lastMessage?.data])

    useEffect(() => {
        console.log(connectionStatus)// check connection status
    })

    return (
        <div className="App">
            <Header/>
            <Body/>
            <Footer clickSendMessage={handleClickSendMessage}/>
        </div>
    )
}

export default App
