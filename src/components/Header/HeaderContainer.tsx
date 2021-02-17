import React from "react"
import { connect } from "react-redux";
import {Header} from "./Header";
import {AppStateType} from "../../redux/store-redux";

type OwnProps ={
	setShowSelectedDates: (type: boolean) => void
	showSelectedDates: boolean
	setShowConfirmWindow: (boolean) => void
}
type MapStatePropsType = {
	isAuth: boolean
	userRole: string | null
}
type MapDispatchPropsType = {}

export type PropsType = MapStatePropsType & OwnProps & MapDispatchPropsType

const HeaderContainer: React.FC<PropsType> = (props) => {
	return (
		<Header {...props}/>
	)
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		isAuth: state.auth.isAuth,
		userRole: state.auth.user.role
	}
}

export default connect<MapStatePropsType,MapDispatchPropsType,OwnProps, AppStateType>(mapStateToProps, {})(HeaderContainer)