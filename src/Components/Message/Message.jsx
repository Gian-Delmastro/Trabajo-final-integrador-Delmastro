import "./Message.css";

function Message({ message }) {

    return (
        <div
            className={
                message.sendByMe
                    ? "message message-me"
                    : "message message-contact"
            }
        >

            <div className="message-content">

                <span>{message.content}</span>

                <div className="message-info">

                    <span className="message-time">
                        {message.time}
                    </span>

                    {message.sendByMe && (
                        <i className="bi bi-check2-all message-check"></i>
                    )}

                </div>

            </div>

        </div>
    );

}

export default Message;