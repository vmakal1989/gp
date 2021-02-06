import React from "react"
import { connect } from "react-redux";
import {Header} from "./Header";
import {AppStateType} from "../../redux/store-redux";
import {removeSessions} from "../../redux/auth-reducer";

type OwnProps ={
	currentPeriod: string
	toggleCurrentPeriod: (type: string) => void
	setShowSelectedDates: (type: boolean) => void
	showSelectedDates: boolean
}
type MapStatePropsType = {
	isAuth: boolean
}
type MapDispatchPropsType = {
	removeSessions: () => void
}

export type PropsType = MapStatePropsType & OwnProps & MapDispatchPropsType

const HeaderContainer: React.FC<PropsType> = (props) => {
	return (
		<Header {...props}/>
	)
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		isAuth: state.auth.isAuth
	}
}

export default connect<MapStatePropsType,MapDispatchPropsType,OwnProps, AppStateType>(mapStateToProps, {removeSessions})(HeaderContainer)