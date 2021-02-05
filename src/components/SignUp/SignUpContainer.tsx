import React from 'react'
import { connect } from 'react-redux'
import {reduxForm} from "redux-form"
import {validate} from "../../helpers/validation/validate-form"
import { ReduxSignUpForm } from './SignUp'
import {signUp} from "../../redux/auth-reducer"
import {AppStateType} from "../../redux/store-redux"
import { Redirect } from 'react-router-dom'

type MapDispatchPropsType = {
    signUp: (firstName: string, lastName: string, email: string, password: string) => void
}
type MapStateToPropsType = {
    isFetching: boolean
    isAuth: boolean
}
type ReduxProps = {
    isFetching: boolean
}
type PropsType = MapDispatchPropsType & MapStateToPropsType

export type FormDataType = {
    confirmPassword: string
    email: string
    firstName: string
    lastName: string
    password: string
}

const SignUpFormContainer: React.FC<PropsType> = ({signUp, isFetching, isAuth}) => {

    const onSubmit = (formData: FormDataType): void => signUp(formData.firstName, formData.lastName, formData.email, formData.password)

    return isAuth ? <Redirect to={'/'} /> : <SignUpForm onSubmit={onSubmit} isFetching={isFetching}/>
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
}

const SignUpForm = reduxForm<FormDataType, ReduxProps>({form: 'signup', validate})(ReduxSignUpForm)

export default connect<MapStateToPropsType,MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {signUp})(SignUpFormContainer)