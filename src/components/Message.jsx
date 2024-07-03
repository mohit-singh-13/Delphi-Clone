const Message = ({message}) => {

    const type = message.type;

    return (
        <div className="w-full">
            <div className="flex justify-between">
                <div>
                {
                    type === "req" &&
                    <div className="max-w-[600px] max-h-max bg-orange-400 text-black font-semibold m-[1rem] rounded-lg p-4">
                        <h2>{message.text}</h2>
                    </div>
                }
                </div>
                <div>
                {   
                    type === "res" &&
                    <div className="max-w-[600px] max-h-max bg-green-400 font-semibold m-[1rem] rounded-lg p-4">
                        <h2>{message.text}</h2>
                    </div>
                }
                </div>
            </div>
        </div>
    )
}

export default Message