import React from 'react'
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import style from "../Header.module.css"

type PropsType = {
	userRole: string | null
}


const AdminLink: React.FC<PropsType> = ({userRole}) => {

	if(userRole !== 'admin')  return <></>
	return (
		<NavLink className={classNames([style.link, style.item, style.item_admin])}
				 activeClassName={style.item_current} exact to="/admin">
			<li>Admin</li>
		</NavLink>
	)
}

export default AdminLink