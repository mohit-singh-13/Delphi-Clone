import { useState } from "react";
import generateResponse from "../utils/prompt";
import Messages from "./Messages";
import { useNavigate } from "react-router-dom";

const Chat = () => {

    const [text, setText] = useState("");
    const [message, setMessage] = useState([]);
    const [loader, setLoader] = useState(false);
    
    const changeHandler = (event) => {
        const {value} = event.target;

        console.log("called")

        setText(value);
    }

    const keyHandler = (event) => {
        if (event.key === "Enter") {
            clickHandler();
        }
    }

    const clickHandler = async() => {

        const reqMessage = {text, type: 'req'};

        setMessage(prev => ([
            ...prev,
            reqMessage
        ]))

        setText("");

        setLoader(true);

        const responseTxt = await generateResponse(text);

        setLoader(false);

        const resMessage = {text: responseTxt, type: 'res'};

        setMessage(prev => (
            [...prev,
            resMessage]
        ))
    }

    const navigation = useNavigate();

    const backHandler = () => {
        navigation("/");
    }

    return (
        <div className="bg-gray-300 h-screen w-11/12 max-w-[1210px] mx-auto relative max-h-max">

            <div className="h-full max-sm:mt-[5rem]">
                <Messages messages={message} loader={loader}/>
            </div>

            <div className="flex gap-2 fixed bottom-5 w-11/12 max-w-[1210px] justify-center">
                <input type="text" name="messages" id="messages" placeholder="type your message" className="w-full placeholder:text-[1.1rem] p-5 rounded-lg border border-black" onChange={changeHandler} onKeyDown={keyHandler} value={text}/>
                <button className="px-[2rem] py-[0.7rem] bg-blue-500 rounded-lg font-bold text-white" onClick={clickHandler}>Send</button>
            </div>

            <button className="fixed top-7 left-10 px-[1rem] py-[0.7rem] bg-blue-500 rounded-md font-semibold" onClick={backHandler}>Back</button>
        </div>
    )
}

export default Chat