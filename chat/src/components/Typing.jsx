export default function Typing({time, name}) {

    return(
        <> {name === 'Ольга' ?
            <li className="clearfix">
                <div className="message-data align-right">
                    <span className="message-data-time">{time}</span> &nbsp; &nbsp;
                    <span className="message-data-name">{name}</span>
                <i className="fa fa-circle me"></i>
                </div>
                <div className="message other-message float-right">
                </div>
            </li> :
                <li>
                <div className="message-data">
                    <span className="message-data-name"><i className="fa fa-circle online"></i>{name}</span>
                    <span className="message-data-time">{time}</span>
                </div>
                <div className="box">
                    <div className="circle"></div>
                    <div className="circle light"></div>
                    <div className="circle superlight"></div>
                </div>
            </li>
    }
        </>
    )
}