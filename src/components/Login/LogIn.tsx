import React from 'react'
import style from './LogIn.module.css'
import {Field} from "redux-form"
import {NavLink} from "react-router-dom"
import { renderField } from '../../helpers/renderField/renderField'
import preloader from "../../assets/images/preloader.svg";

export const ReduxLoginForm = ({handleSubmit, error, isFetching}) => {
    return (
        <div className={style.login_container}>
            <div className={style.title}>Log In</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="email" component={renderField} type="text" placeholder='Email' style={style}/>
                </div>
                <div>
                    <Field name="password" component={renderField} type="password" placeholder="Password" style={style}/>
                </div>
                { error && <div className={style.submitError}>{error.message}</div> }
                <div className={style.nav_box}>
                    <NavLink to='/signup' className={style.link} >Sign Up</NavLink>
                    <button className={style.button} disabled={isFetching}>
                        {isFetching ?
                            <img className={style.preloader} src={preloader} alt={preloader}/>
                            :
                            'Sign In'
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}