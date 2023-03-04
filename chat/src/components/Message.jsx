export default function Message({time, name, text}) {
    return(
        <>
            <li>
                <div className="message-data">
                    <span className="message-data-name"><i className="fa fa-circle online"></i>{name}</span>
                    <span className="message-data-time">{time}</span>
                </div>
                <div className="message my-message">
                    {text}
                </div>
            </li>
        </>
    )
}