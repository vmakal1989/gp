import React from 'react'
import { connect } from 'react-redux'
import {reduxForm} from "redux-form"
import {validate} from "../../helpers/validation/validate-form"
import { ReduxLoginForm } from './LogIn'
import {newSessions} from "../../redux/auth-reducer"
import {AppStateType} from "../../redux/store-redux";

type MapDispatchPropsType = {
    newSessions: (email: string, password: string) => void
}
type MapStateToPropsType = {
    isFetching: boolean
}

type PropsType = MapDispatchPropsType & MapStateToPropsType

type FormDataType = {
    email: string
    password: string
}

const LoginFormContainer: React.FC<PropsType> = ({newSessions, isFetching}) => {
    const onSubmit = (formData: FormDataType) => {
        newSessions(formData.email, formData.password)
    }
    return <LoginForm onSubmit={onSubmit} />
}

const LoginForm = reduxForm<FormDataType>({form: 'login', validate})(ReduxLoginForm)

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isFetching: state.auth.isFetching
    }
}

export default connect<MapStateToPropsType,MapDispatchPropsType, {}, AppStateType >(mapStateToProps, {newSessions})(LoginFormContainer)
