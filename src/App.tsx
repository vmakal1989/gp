import React, {FunctionComponent, useState} from 'react'
import './App.css'
import NavbarContainer from "./components/Navbar/NavbarContainer"
import { Month } from './components/Periods/Month/Month'
import {Week} from "./components/Periods/Week/Week"
import NotepadContainer from "./components/Notepad/NotepadContainer"
import {Route, BrowserRouter, withRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store-redux";
import {SelectDates} from "./components/SelectDates/SelectDates";
import classNames from "classnames";
import LoginFormContainer from "./components/Login/LogInContainer";
import SignUpFormContainer from "./components/SignUp/SignUpContainer";

const getNotepadTitle = (pathname: string): Array<string> => pathname.split('/')[2].split('-')

const App = (props) => {

    const [currentPeriod, setCurrentPeriod] = useState<string>('week')
    const [showSelectedDates, setShowSelectedDates] = useState<boolean>(false)

    const toggleCurrentPeriod = (type: string): void  => setCurrentPeriod(type)
    const renderPeriod = (): JSX.Element => currentPeriod === 'week' ? <Week /> : <Month />

    return (
    <div className='app'>
        <NavbarContainer currentPeriod={currentPeriod}
                toggleCurrentPeriod={toggleCurrentPeriod}
                setShowSelectedDates={setShowSelectedDates}
                showSelectedDates={showSelectedDates}/>
        <div className={classNames('dates__popup', showSelectedDates ? 'dates__popup_active' : '')}>
            <SelectDates setShowSelectedDates={setShowSelectedDates}
                         toggleCurrentPeriod={toggleCurrentPeriod}/>
        </div>
        <Route path='/' exact render={() => renderPeriod()}/>
        <Route path='/notepad' render={() => <NotepadContainer date={getNotepadTitle(props.location.pathname)}
                                                               toggleCurrentPeriod={toggleCurrentPeriod} />}/>
        <Route path='/login' component={LoginFormContainer}/>
        <Route path='/signup' component={SignUpFormContainer}/>
    </div>
    )
}
const AppContainer = withRouter(App);

export const MainApp: FunctionComponent = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )

}