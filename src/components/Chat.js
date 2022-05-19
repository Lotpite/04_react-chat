import React, { useContext, useState, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { collection, query, addDoc, serverTimestamp, orderBy, limit } from "firebase/firestore"; 
import { Context } from '../index';
import { Avatar, ChatArea, MessageItem, SendButton, SendMessageBlock, Text, TextBlock, TextContent, TextField, UserName } from '../styles/Chat.styled';

const Chat = () => {

    const dummy = useRef();
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const messagesRef = collection(firestore, "messages")
    const q = query(messagesRef, orderBy("createdTime", "asc"));
    const [messages] = useCollectionData(q);    

    const sendMessage = async (e) => {
        e.preventDefault()
        addDoc(collection(firestore, 'messages'), {
            userId: user.uid,
            name: user.displayName,
            avatar: user.photoURL,
            text: value,
            createdTime: serverTimestamp()
        })
        
        setValue('')
        dummy.current.scrollIntoView()
    }

    return ( 
        <ChatArea>
            <TextBlock>
                {messages ? messages.map(message => {
                    const position = user.uid === message.userId ? 'sender' : 'receiver'
                        return (
                        <MessageItem position={position} key={message.createdTime}>
                            <Avatar src={message.avatar} alt="" />
                            <TextContent>
                                <UserName position={position}>{message.name}:</UserName>
                                <Text position={position}>{message.text}</Text>
                            </TextContent>
                        </MessageItem>
                        )
                })
                : 'no messages'}
                <span ref={dummy}></span>
            </TextBlock>
            <SendMessageBlock>
                <TextField value={value} onChange={e => setValue(e.target.value)}></TextField>
                <SendButton type="submit" onClick={sendMessage}>send</SendButton>
            </SendMessageBlock>
        </ChatArea>
     );
}
 
export default Chat;