import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

export default function MessageHistory({list}) {

    const checkType = (type, name, time, text) => {
        if  (type === 'response') {
            return <Response name={name} time={time} text={text}/>
        } else if (type === 'message') {
            return <Message name={name} time={time} text={text}/>
        } else {
            return <Typing name={name} time={time} text={text}/>
        }
    } 

    return(
        <>
            {list.map((el) => {
                return(
                    <ul key={el.id}>{checkType(el.type, el.from.name, el.time, el.text)}</ul>
                )
            })}
        </>
    )
}

MessageHistory.defaultProps = {list: []}