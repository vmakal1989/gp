import React, {FunctionComponent, useState} from 'react'
import './App.css'
import {Navbar} from "./components/Navbar/Navbar"
import { Month } from './components/Periods/Month/Month'
import {Week} from "./components/Periods/Week/Week"
import {Notepad} from "./components/Notepad/Notepad"
import {Route, BrowserRouter, withRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store-redux";
import {SelectDates} from "./components/SelectDates/SelectDates";
import classNames from "classnames";

const getNotepadTitle = (pathname: string): string => {
    const pathArray = pathname.split('/')
    return pathArray[2]
}

const App: FunctionComponent<any> = (props) => {

    const [currentPeriod, setCurrentPeriod] = useState<string>('week')
    const [showSelectedDates, setShowSelectedDates] = useState<boolean>(false)

    function toggleCurrentPeriod(type: string): void {
        setCurrentPeriod(type)
    }
    const renderPeriod = (): JSX.Element => {
        return currentPeriod === 'week' ? <Week /> : <Month />
    }
    return (
    <div className='app'>
        <Navbar currentPeriod={currentPeriod}
                toggleCurrentPeriod={toggleCurrentPeriod}
                setShowSelectedDates={setShowSelectedDates}
                showSelectedDates={showSelectedDates}/>
        <div className={classNames('dates__popup', showSelectedDates ? 'dates__popup_active' : '')}>
            <SelectDates setShowSelectedDates={setShowSelectedDates}/>
        </div>
        <Route path='/' exact render={() => renderPeriod()}/>
        <Route path='/notepad' render={() => <Notepad date={getNotepadTitle(props.location.pathname)}/>}/>
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