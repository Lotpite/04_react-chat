import React, { useContext, useState, useRef, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, query, addDoc, serverTimestamp, orderBy, getDocs } from "firebase/firestore"; 
import { Context } from '../index';
import { Avatar, ChatArea, MessageItem, SendButton, SendMessageBlock, Text, TextBlock, TextContent, TextField } from '../styles/Chat.styled';

const Chat = () => {

    const dummy = useRef();
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');  
    const [messages, setMessages] = useState([]);  

    useEffect(  () => {
        const q = query(collection(firestore, "messages"), orderBy("createdTime", "asc"));
             getDocs(q)
            .then(res => setMessages(res.docs.map(doc => doc.data())))

    })

    const sendMessage = async (e) => {
        e.preventDefault()

        await addDoc(collection(firestore, 'messages'), {
            userId: user.uid,
            name: user.displayName,
            avatar: user.photoURL,
            text: value,
            createdTime: serverTimestamp()
        })

        dummy.current.scrollIntoView({ behavior: 'smooth' })
        setValue('')
    }

    return ( 
        <ChatArea>
            <TextBlock>
                {messages.map(message => {
                    const position = user.uid === message.userId ? 'sender' : 'receiver'
                        return (
                        <MessageItem  position={position} key={message.createdTime}>
                            <Avatar src={message.avatar} alt="" />
                            <TextContent>
                                {/* <UserName position={position}>{message.name}:</UserName> */}
                                <Text position={position}>{message.text}</Text>
                            </TextContent>
                        </MessageItem>
                        
                        )
                })}
            </TextBlock>
            <SendMessageBlock>
                <TextField value={value} placeholder="Type message here" onChange={e => setValue(e.target.value) }></TextField>
                <SendButton type="submit" onClick={sendMessage}>send</SendButton>
            </SendMessageBlock>
            <div ref={dummy}></div>
        </ChatArea>
     );
}
 
export default Chat;