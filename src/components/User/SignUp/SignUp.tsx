import React from 'react'
import style from './SignUp.module.css'
import {Field, reduxForm} from "redux-form"
import {validate} from "../../helpers/validation/validate-form"
import classNames from 'classnames'
import {NavLink} from "react-router-dom"
import * as axios from "axios"

const renderField = ({input, placeholder, label, type, meta: { touched, error, warning }}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={placeholder} type={type} className={classNames(style.field, error && touched ? style.field_error : null)}/>
            <div className={style.error}>
                {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
        </div>
    </div>
)

const ReduxSignUpForm = ({handleSubmit}) => {
    return (
        <div className={style.login_block}>
            <div className={style.title}>Sign Up</div>
            <form onSubmit={handleSubmit}>
                <div className={style.flex_box}>
                    <div className={style.flex_field}>
                        <Field name="firstName"
                               component={renderField}
                               type="text"
                               placeholder="First name"
                        />
                    </div>
                    <div className={style.flex_field}>
                        <Field name="lastName"
                               component={renderField}
                               type="text"
                               placeholder="Last Name"
                        />
                    </div>
                </div>
                <div>
                    <Field name="email"
                           component={renderField}
                           type="text"
                           placeholder='Email'
                    />
                </div>
                <div className={style.flex_box}>
                    <div className={style.flex_field}>
                        <Field name="password"
                               component={renderField}
                               type="password"
                               placeholder="Password"
                        />
                    </div>
                    <div className={style.flex_field}>
                        <Field name="confirmPassword"
                               component={renderField}
                               type="password"
                               placeholder="Confirm password"
                        />
                    </div>
                </div>
                <div className={style.nav_box}>
                    <NavLink to='/login' className={style.link}>Sign In</NavLink>
                    <button className={style.submit}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

const SignUpForm = reduxForm({form: 'signup', validate})(ReduxSignUpForm)

const ContainerSignUpForm = () => {
    const onSubmit = (formData) => {
        const instance = axios.create({
            withCredentials: true,
            baseURL: 'http://127.0.0.1:3000/api/',
        });

        instance.post('sign_up', {user: {
                first_name: formData.firstName,
                last_name: formData.lastName,
                password: formData.password,
                password_confirmation: formData.confirmPassword,
                email: formData.email
            }})
        .then(response => {
            debugger
        })

    }
    return <SignUpForm onSubmit={onSubmit}/>
}

export default ContainerSignUpForm