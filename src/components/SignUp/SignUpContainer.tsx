import React from 'react'
import { connect } from 'react-redux'
import {reduxForm} from "redux-form"
import {validate} from "../../helpers/validation/validate-form"
import { ReduxSignUpForm } from './SignUp'
import {signUp} from "../../redux/auth-reducer"
import {AppStateType} from "../../redux/store-redux"

type MapDispatchPropsType = {
    signUp: (firstName: string, lastName: string, email: string, password: string) => void
}
type MapStateToPropsType = {
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

const SignUpFormContainer: React.FC<PropsType> = ({signUp, isFetching}) => {

    const onSubmit = (formData: FormDataType): void => signUp(formData.firstName, formData.lastName, formData.email, formData.password)

    return <SignUpForm onSubmit={onSubmit} isFetching={isFetching}/>
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isFetching: state.auth.isFetching
    }
}

const SignUpForm = reduxForm<FormDataType, MapStateToPropsType>({form: 'signup', validate})(ReduxSignUpForm)

export default connect<MapStateToPropsType,MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {signUp})(SignUpFormContainer)