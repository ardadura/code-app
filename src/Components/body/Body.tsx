import "./Body.scss"
import {useSelector} from "react-redux";
import {IStore} from "../../Store/store";
import {messages} from "../../Store/Slices/Messages";
import {useEffect} from "react";

const Body = () => {
    const _messages: any = useSelector<IStore>(messages)

    useEffect(() => {
        const el: any = document.getElementById("main");
        el.scrollTop = el.scrollHeight
    },[_messages])

    return (
        <main id="main">
            {_messages?.conversation.map((item: any, index: number) => {
                return <div key={index} className={`item ${item.isMine && 'mine'}`}>
                    <div>{item.text}</div>
                </div>
            })}
        </main>
    )
}
export default Body
