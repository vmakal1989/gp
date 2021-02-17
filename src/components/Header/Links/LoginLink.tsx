import React from 'react'
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import style from "../Header.module.css"

type PropsType = {
    isAuth: boolean
    setShowConfirmWindow: (boolean) => void
}

const LoginLink: React.FC<PropsType> = ({isAuth, setShowConfirmWindow}) => {

    if(isAuth) return <li className={classNames([style.link, style.item, style.item_login])}
                                          onClick={setShowConfirmWindow}>Sign out</li>
    return (
        <NavLink className={classNames([style.link, style.item, style.item_login])} exact to="/login"
                 activeClassName={style.item_current}
                 isActive={(match, location): boolean => {
                     if (location.pathname === '/login' || location.pathname === '/signup') {
                         return true
                     }
                     return false
                 }}
        >
            <li>Log In</li>
        </NavLink>
    )
}

export default LoginLink