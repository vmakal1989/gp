import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../../redux/store-redux'
import Admin from "./Admin"
import {getUsers} from "../../redux/users-reducer"
import {UserType} from "../../types/types";

type PropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
	userRole: string
	users: Array<UserType>
}
type MapDispatchToPropsType = {
	getUsers: () => void
}

const AdminContainer: React.FC<PropsType> = (props) => {
	useEffect(() => {
		props.getUsers()
	}, [])

	if(props.userRole !== 'admin') return <Redirect to={'/'} />
	return <Admin {...props} />
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return {
		userRole: state.auth.user.role,
		users: state.users
	}
}

export default connect<MapStateToPropsType,MapDispatchToPropsType,{},AppStateType>(mapStateToProps, {getUsers})(AdminContainer)