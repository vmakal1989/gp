import React, {useState} from 'react'
import style from './Admin.module.css'
import Users from "./Users/Users";
import {UserType} from "../../types/types";

type PropsType = {
	users: Array<UserType>
}

const Admin: React.FC<PropsType> = (props) => {
		const [showNotes, setShowNotes] = useState<boolean>(false)
	return (
		<div className={style.container}>
			{ !showNotes && <Users users={props.users} /> }
		</div>
	)
}


export default Admin