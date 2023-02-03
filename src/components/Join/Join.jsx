import {useState} from "react";
import {Link} from "react-router-dom";
import './join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">
                    Join
                </h1>
                <div>
                    <input
                        id="name-input"
                        type="text"
                        value={name}
                        placeholder={"User name"}
                        className="joinInput"
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <input
                        id="room-input"
                        type="text"
                        value={room}
                        placeholder={"room"}
                        className="joinInput mt-20"
                        onChange={(e) => {
                            setRoom(e.target.value)
                        }}
                    />
                </div>
                <Link
                    onClick={event => (!name || !room) ? event.preventDefault() : null}
                    to={`/chat?name=${name}&room=${room}`}
                >
                    <button className={"button mt-20"} type={"submit"}>Sign In</button>
                </Link>
            </div>
        </div>
    );
}

export default Join;
