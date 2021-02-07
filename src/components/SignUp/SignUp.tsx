import React from 'react'
import style from './SignUp.module.css'
import {Field} from "redux-form"
import {NavLink} from "react-router-dom"
import { renderField } from '../../helpers/renderField/renderField'
import preloader from "../../assets/images/preloader.svg";

export const ReduxSignUpForm = ({handleSubmit, error, isFetching}) => {
    return (
        <div className={style.sign_up_container}>
            <div className={style.title}>Registration</div>
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
                    <button className={style.submit} disabled={isFetching}>
                        {isFetching ?
                            <img className={style.preloader} src={preloader} alt={preloader}/>
                            :
                            'Sign Up'
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}