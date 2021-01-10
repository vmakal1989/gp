import React, {FunctionComponent, useState} from 'react'
import './App.css'
import {Navbar} from "./components/Navbar/Navbar"
import { Month } from './components/Periods/Month/Month'
import {Week} from "./components/Periods/Week/Week"
import {Year} from "./components/Periods/Year/Year"
import {Notepad} from "./components/Notepad/Notepad"
import {Route, BrowserRouter, withRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store-redux";

const getNotepadTitle = (pathname: string): string => {
    const pathArray = pathname.split('/')
    return pathArray[2]
}

const App: FunctionComponent<any> = (props) => {
    const [currentPeriod, setCurrentPeriod] = useState<string>('week')
    function toggleCurrentPeriod(type: string): void {
        setCurrentPeriod(type)
    }
    const renderPeriod = (): JSX.Element => {
        return currentPeriod === 'week' ? <Week /> : currentPeriod === 'month' ? <Month /> : <Year />
    }
    return (
    <div className='app'>
        <Navbar currentPeriod={currentPeriod} toggleCurrentPeriod={toggleCurrentPeriod}/>
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