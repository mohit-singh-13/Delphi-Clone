import Loader from "./Loader"
import Message from "./Message"

const Messages = ({messages, loader}) => {

    return (
        <div className="pb-[8rem] bg-gray-300 relative">
            {
                messages.map((message, index) => {
                    return <Message key={index} message={message} loader={loader} />
                })
            }
            {
                loader && <Loader />
            }
        </div>
    )
}

export default Messages