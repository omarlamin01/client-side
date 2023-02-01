import {useState} from "react";
import {Link} from "react-router-dom";

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
                    <input type="text" placeholder="" className="joinInput" onChange=""/>
                </div>
                <div>
                    <input type="text" placeholder="" className="joinInput" onChange=""/>
                </div>
                <Link to={"/chat"}>

                </Link>
            </div>
        </div>
    );
}

export default Join;
