import styled from "styled-components";
import bg from '../assets/bg.jpg'

export const ChatArea = styled.div`
    position: relative;
    border: 2px solid green; 
    border-radius: 10px;
    height: 80vh;
    width: 100%;
    max-width: 728px;
    background-image: url(${bg});
`

export const TextBlock = styled.div`
    margin: 10px;
    height: 65vh;
    width: 100%;
    max-width: 697px;
    overflow-y: scroll;
`

export const MessageItem = styled.div`
    display: flex;
    flex-direction: ${props => props.position === 'sender' ? 'row' : 'row-reverse'};
    margin: 10px;
    
`
export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    width: 100%;
    max-width: 685px;
    word-wrap: break-word;
    
`

export const UserName = styled.div`
    font-weight: 500;
    border-radius: 10px;
    margin-bottom: 5px;
    align-self: ${props => props.position === 'sender' ? 'flex-start' : 'flex-end'}
`

export const Text = styled.div`
    background-color: rgba(0,2,300,0.35);
    background-color: ${props => props.position === 'sender'  ? 'rgba(0,2,300,0.45)' : 'rgba(128, 0, 128, 0.6)'};
    min-height: 30px;
    max-width: 500px;
    border-radius: 10px;
    padding: 5px;
    color: white;
    align-self: ${props => props.position === 'sender'  ? 'flex-start' : 'flex-end'}
`

export const SendMessageBlock = styled.form`
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
    width: 100%;
    max-width: 697px;
`

export const TextField = styled.input`
    height: 50px;
    width: 100%;
    max-width: 685px;
    padding: 5px;
    border-radius: 10px;
    align-self: flex-end;
`

export const SendButton = styled.button`
    height: 50px;
    width: 50px;
    margin-left: 10px;
    border-radius: 50px;
    text-decoration: none;
    text-shadow: 0 1px 0 #fff;
    font: bold 11px Helvetica, Arial, sans-serif;
    color: #444;
    line-height: 17px;
    background: #F3F3F3;
    border: solid 5px #D9D9D9;
    -webkit-transition: border-color .20s;
    -moz-transition: border-color .20s;
    -o-transition: border-color .20s;
    transition: border-color .20s;
    // height: 29px !important;
    cursor: pointer;
    :hover {
        background: #F4F4F4;
        border-color: #C0C0C0;
        color: #333;
    }
`