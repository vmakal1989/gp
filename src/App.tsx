import React, {useState} from 'react'
import './App.css'
import HeaderContainer from "./components/Header/HeaderContainer"
import NotepadContainer from "./components/Notepad/NotepadContainer"
import {Route, BrowserRouter, withRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./redux/store-redux"
import {SelectDates} from "./components/SelectDates/SelectDates"
import classNames from "classnames"
import LoginFormContainer from "./components/Login/LogInContainer"
import SignUpFormContainer from "./components/SignUp/SignUpContainer"
import { useEffect } from 'react'
import firebase from "firebase"
import {initializedUser} from "./redux/auth-reducer"
import {getNotes} from "./redux/notes-reducer"
import CalendarContainer from "./components/Calendar/CalendarContainer"
import ConfirmWindow from './components/ConfirmWindow/ConfirmWindow'


const App = (props) => {
    useEffect(()=> {
        firebase.auth().onAuthStateChanged((user) => {
            user && store.dispatch(initializedUser(user.uid, user.email))
            // @ts-ignore
            user && store.dispatch(getNotes(user.uid))
        })
    },[])

    const getNotepadTitle = (pathname: string): Array<string> => pathname.split('/')[2].split('-')
    const [showSelectedDates, setShowSelectedDates] = useState<boolean>(false)
    const [showConfirmWindow, setShowConfirmWindow] = useState<boolean>(false)

    return (
        <div className={'app'}>
            <div className={showConfirmWindow ? 'blur' : ''}>
                <HeaderContainer setShowSelectedDates={setShowSelectedDates}
                                 showSelectedDates={showSelectedDates}
                                 setShowConfirmWindow={setShowConfirmWindow}/>
                <div className={classNames('dates__popup', showSelectedDates ? 'dates__popup_active' : '')}>
                    <SelectDates setShowSelectedDates={setShowSelectedDates} />
                </div>
                <Route path='/' exact render={() => <CalendarContainer />}/>
                <Route path='/notepad' render={() => <NotepadContainer date={getNotepadTitle(props.location.pathname)}/>}/>
                <Route path='/login' render={() => <LoginFormContainer />}/>
                <Route path='/signup' render={() => <SignUpFormContainer />}/>
            </div>
            { showConfirmWindow && <ConfirmWindow setShowConfirmWindow={setShowConfirmWindow} /> }
        </div>
    )
}
const AppContainer = withRouter(App);

export const MainApp = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )

}