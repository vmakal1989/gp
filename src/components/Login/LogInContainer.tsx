import React from 'react'
import { connect } from 'react-redux'
import {reduxForm} from "redux-form"
import {validate} from "../../helpers/validation/validate-form"
import { ReduxLoginForm } from './LogIn'
import {newSessions} from "../../redux/auth-reducer"
import {AppStateType} from "../../redux/store-redux";
import { Redirect } from 'react-router-dom'

type MapDispatchPropsType = {
    newSessions: (email: string, password: string) => void
}
type MapStateToPropsType = {
    isFetching: boolean
    isAuth: boolean
}
type ReduxProps = {
    isFetching: boolean
}

type PropsType = MapDispatchPropsType & MapStateToPropsType

type FormDataType = {
    email: string
    password: string
}

const LoginFormContainer: React.FC<PropsType> = ({newSessions, isFetching, isAuth}) => {
    const onSubmit = (formData: FormDataType) => {
        newSessions(formData.email, formData.password)
    }
    return  isAuth ? <Redirect to={'/'} /> : <LoginForm onSubmit={onSubmit} isFetching={isFetching}/>
}

const LoginForm = reduxForm<FormDataType,ReduxProps>({form: 'login', validate})(ReduxLoginForm)

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
}

export default connect<MapStateToPropsType,MapDispatchPropsType, {}, AppStateType >(mapStateToProps, {newSessions})(LoginFormContainer)
