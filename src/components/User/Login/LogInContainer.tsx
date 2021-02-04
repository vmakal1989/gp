import React from 'react'
import style from './LogIn.module.css'
import {Field, reduxForm} from "redux-form";
import {validate} from "../../../helpers/validation/validate-form";
import classNames from 'classnames'
import {NavLink} from "react-router-dom";

const renderField = ({input, placeholder, label, type, meta: { touched, error, warning }}) => (
    <div>
        <label>{label}</label>
        <div className={style.field_box}>
            <input {...input} placeholder={placeholder} type={type} className={classNames(style.field, error && touched ? style.field_error : null)}/>
            <div className={style.error}>
                {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
        </div>
    </div>
)

const ReduxLoginForm = ({handleSubmit}) => {
    return (
        <div className={style.login_container}>
            <div className={style.title}>Log In</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="email" component={renderField} type="text" placeholder='Email'/>
                </div>
                <div>
                    <Field name="password" component={renderField} type="password" placeholder="Password"/>
                </div>
                <div className={style.nav_box}>
                    <NavLink to='/signup' className={style.link}>Sign Up</NavLink>
                    <button className={style.submit}>Log In</button>
                </div>
            </form>
        </div>
    )
}

const LoginForm = reduxForm({form: 'login', validate})(ReduxLoginForm)

const ContainerLoginForm = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <LoginForm onSubmit={onSubmit}/>
}

export default ContainerLoginForm