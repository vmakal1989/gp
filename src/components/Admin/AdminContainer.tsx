import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../../redux/store-redux'
import Admin from './Admin'
import {getUsers} from '../../redux/users-reducer'
import {NoteType, UserType} from '../../types/types'
import {getUserNotes, resetUserNotes} from '../../redux/userNotes-reducer'

type PropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
	userRole: string
	users: Array<UserType>
	userNotes: Array<NoteType>
	isFetchingNotes: boolean
	isFetchingUsers: boolean
}
type MapDispatchToPropsType = {
	getUsers: () => void
	getUserNotes: (id: string | null) => void
	resetUserNotes: () => void
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
		users: state.users.users,
		userNotes: state.userNotes.notes,
		isFetchingNotes: state.userNotes.isFetching,
		isFetchingUsers: state.users.isFetching
	}
}

export default connect<MapStateToPropsType,MapDispatchToPropsType,{},AppStateType>
				(mapStateToProps, {getUsers, getUserNotes, resetUserNotes})(AdminContainer)