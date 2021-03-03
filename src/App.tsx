import React, {Suspense, useState} from 'react'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import NotepadContainer from './components/Notepad/NotepadContainer'
import {Route, BrowserRouter, withRouter, RouteComponentProps} from 'react-router-dom'
import {connect, Provider} from 'react-redux'
import store, {AppStateType} from './redux/store-redux'
import {SelectDates} from './components/SelectDates/SelectDates'
import classNames from 'classnames'
import LoginFormContainer from './components/Login/LogInContainer'
import SignUpFormContainer from './components/SignUp/SignUpContainer'
import { useEffect } from 'react'
import CalendarContainer from './components/Calendar/CalendarContainer'
import ConfirmWindow from './components/ConfirmWindow/ConfirmWindow'
import Preloader from './components/Preloader/Preloader'
import { initializeApp } from './redux/app-reducer'

const AdminContainer = React.lazy(() => import('./components/Admin/AdminContainer'))

type PropsType = RouteComponentProps & MapStatePropsType & MapDispatchPropsType

const App: React.FC<PropsType> = (props) => {
    useEffect(()=> {
        props.initializeApp()
    },[])

    const getNotepadTitle = (pathname: string): Array<string> => pathname.split('/')[2].split('-')
    const [showSelectedDates, setShowSelectedDates] = useState<boolean>(false)
    const [showConfirmWindow, setShowConfirmWindow] = useState<boolean>(false)

    if(!props.initialized) return <Preloader />

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
                <Suspense fallback={<div><Preloader /></div>}>
                    <Route path='/admin' render={() => <AdminContainer />}/>
                </Suspense>

            </div>
            { showConfirmWindow && <ConfirmWindow setShowConfirmWindow={setShowConfirmWindow} /> }
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}

type MapStatePropsType = {
    initialized: boolean
}
type MapDispatchPropsType = {
    initializeApp: () => void
}

const AppContainer = connect<MapStatePropsType, MapDispatchPropsType,{}, AppStateType>(mapStateToProps, {initializeApp})(withRouter(App))

export const MainApp = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )

}