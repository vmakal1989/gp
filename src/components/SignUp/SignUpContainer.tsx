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
type PropsType = MapDispatchPropsType

export type FormDataType = {
    confirmPassword: string
    email: string
    firstName: string
    lastName: string
    password: string
}

const SignUpFormContainer: React.FC<PropsType> = ({signUp}) => {

    const onSubmit = (formData: FormDataType): void => signUp(formData.firstName, formData.lastName, formData.email, formData.password)

    return <SignUpForm onSubmit={onSubmit} />
}

const SignUpForm = reduxForm<FormDataType>({form: 'signup', validate})(ReduxSignUpForm)

export default connect<null,MapDispatchPropsType, {}, AppStateType>(null, {signUp})(SignUpFormContainer)