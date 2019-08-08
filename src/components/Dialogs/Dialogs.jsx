import React from 'react';
import c from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";

const Dialogs = (props) => {


    let dialogsElems =  props.messagesPage.dialogs.map(item => (<DialogItem name={item.name} id={item.id} />));
    let messagesElems = props.messagesPage.messages.map(el => (<Message type={el.type} text={el.message} />));

    return(
        <div className={c.dialogs}>
            <div className={c.usersList}>
                { dialogsElems }
            </div>
            <div className={c.dialogsList}>
                <div className={c.dialog}>
                    { messagesElems }
                </div>

                <NewMessage sendMsg={props.sendMsg} updateNewMsg={props.updateNewMsg} newMsg={props.messagesPage.newMessage}/>
            </div>
        </div>
    )
};

export default Dialogs;