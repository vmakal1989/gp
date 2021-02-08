import React from 'react'
import {connect} from "react-redux"
import {removeSessions} from "../../redux/auth-reducer"
import style  from './ConfirmWindow.module.css'

type MapDispatchPropsType = {
	removeSessions: () => void
}
type OwnProps = {
	setShowConfirmWindow: (boolean) => void
}
type PropsType = MapDispatchPropsType & OwnProps

const ConfirmWindow: React.FC<PropsType> = (props) => {
	return (
		<div className={style.container}>
			<div className={style.text}>Do you really want to leave?</div>
			<div className={style.buttonGroup}>
				<button className={style.button} onClick={() => props.setShowConfirmWindow(false)}>No</button>
				<button className={style.button} onClick={() => {
					props.removeSessions()
					props.setShowConfirmWindow(false)
				}}>Yes</button>
			</div>
		</div>
	)
}

export  default connect<null,MapDispatchPropsType,OwnProps>(null, {removeSessions})(ConfirmWindow)