import { Navigate } from "react-router-dom";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/const";
import Chat from "./Chat";
import LogIn from "./LogIn";

export const publicRoutes = [
    {path: LOGIN_ROUTE, Element: LogIn},
    {path: "*", Element: Navigate, toPath: LOGIN_ROUTE}
  ]

export const privateRoutes = [
    {path: CHAT_ROUTE, Element: Chat},
    {path: "*", Element: Navigate, toPath: CHAT_ROUTE}
]