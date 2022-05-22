import styled from "styled-components";
import bg from '../assets/bg.jpg'

export const LoginBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background-image: url(${bg});y
    border-radius: 10px;
    width: 100%;
    height: 200px;
`

export const LoginButton = styled.button`
width: 200px;
height: 50px;
text-decoration: none;
text-shadow: 0 1px 0 #fff;
font: bold 11px Helvetica, Arial, sans-serif;
color: #444;
line-height: 17px;
display: inline-block;
float: left;
padding: 5px 6px 4px 6px;
background: #F3F3F3;
border: solid 4px #D9D9D9;
border-radius: 50px;
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