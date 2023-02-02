import { useState, useEffect } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import {useLocation} from "react-router-dom";

let socket;

const Chat = () => {
    const location = useLocation();
    const ENDPOINT = 'http://localhost:5000/';

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        console.log(socket);
    }, [ENDPOINT, location.search]);

    return (
        <h1>chat component</h1>
    );
}

export default Chat;
