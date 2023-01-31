import {useState, useEffect} from "react";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        socket.on("message", (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();
        if (message) {
            socket.emit("sendMessage", message, () => setMessage(""));
        }
    };

    return (
        <div className="outerContainer">
            <div className="container">
                {/*<InfoBar/>*/}
                {/*<Messages messages={messages} name={name}/>*/}
                {/*<Input*/}
                {/*    message={message}*/}
                {/*    setMessage={setMessage}*/}
                {/*    sendMessage={sendMessage}*/}
                {/*/>*/}
            </div>
        </div>
    );
}

export default Chat;
