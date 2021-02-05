import React from 'react'
import style from './SignUp.module.css'
import {Field} from "redux-form"
import {NavLink} from "react-router-dom"
import { renderField } from '../../helpers/renderField/renderField'

export const ReduxSignUpForm = ({handleSubmit, error}) => {
    return (
        <div className={style.sign_up_container}>
            <div className={style.title}>Sign Up</div>
            <form onSubmit={handleSubmit}>
                <div className={style.flex_box}>
                    <div className={style.flex_field}>
                        <Field name="firstName" component={renderField} type="text" style={style} placeholder="First Name"/>
                    </div>
                    <div className={style.flex_field}>
                        <Field name="lastName" component={renderField} type="text" style={style} placeholder="Last Name"/>
                    </div>
                </div>
                <div>
                    <Field name="email" component={renderField} type="text"  style={style} placeholder='Email'/>
                </div>
                <div className={style.flex_box}>
                    <div className={style.flex_field}>
                        <Field name="password" component={renderField} type="password" style={style} placeholder="Password" />
                    </div>
                    <div className={style.flex_field}>
                        <Field name="confirmPassword" component={renderField} type="password"  style={style} placeholder="Confirm password"/>
                    </div>
                </div>
                { error && <div className={style.submitError}>{error.message}</div> }
                <div className={style.nav_box}>
                    <NavLink to='/login' className={style.link}>Log In</NavLink>
                    <button className={style.submit}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}