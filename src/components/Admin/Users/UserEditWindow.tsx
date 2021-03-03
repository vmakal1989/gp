import React, {useState} from 'react'
import style from '../Admin.module.css'
import successIcon from '../../../assets/images/svg/ok.svg'
import cancelIcon from '../../../assets/images/svg/cancel.svg'
import { connect } from 'react-redux'
import { AppStateType } from '../../../redux/store-redux'
import {sendNewUserData} from '../../../redux/users-reducer'
import {UserType} from '../../../types/types'

type PropsType = OwnPropsType & MapDispatchToPropsType

type OwnPropsType = {
	setEditUSer: (boolean) => void
	user: UserType
}
type MapDispatchToPropsType = {
	sendNewUserData: (userId: string | null, email: string, firstName: string, lastName: string, role: string) => void
}

const UserEditWindow: React.FC<PropsType> = (props) => {
	const [firstName, setFirstName] = useState<string >(props.user.firstName)
	const [lastName, setLastName] = useState<string>(props.user.lastName)

	const sendUserData = () => props.sendNewUserData(props.user.id, props.user.email, firstName, lastName, props.user.role )

	return (
		<div className={style.user__editWindow}>
			<input className={style.user_editInput} type="text" value={firstName}
				   onChange={(e) => setFirstName(e.target.value)}/>
			<input className={style.user_editInput} type="text" value={lastName}
				   onChange={(e) => setLastName(e.target.value)}/>
			<div className={style.btnSuccess} onClick={() => {
				props.setEditUSer(false)
				sendUserData()
			}}>
				<img src={successIcon} alt={successIcon}/>
			</div>
			<div className={style.btnCancel} onClick={() => props.setEditUSer(false)}>
				<img src={cancelIcon} alt={cancelIcon} />
			</div>
		</div>
	)
}
export default  connect<{}, MapDispatchToPropsType, OwnPropsType, AppStateType>(null, {sendNewUserData})(UserEditWindow)