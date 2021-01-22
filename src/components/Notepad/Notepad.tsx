import React, {FunctionComponent} from 'react'
import { Link } from 'react-router-dom'
import style from './Notepad.module.css'
import {NodepadRowContainer} from "./NodepadRow"
import { connect } from 'react-redux'
import moment from 'moment'
import { noteType } from '../../types/types'

interface propsType {
    date: Array<string>
    datesData: datesDataType
    toggleCurrentPeriod: (type: string) => void
}
interface mapStateToPropsType {
    datesData: datesDataType
}
interface datesDataType {
    current: boolean
    data: Array<noteType>
}

const Notepad: FunctionComponent<propsType> = ({date, datesData,toggleCurrentPeriod}) => {
    const hours: Array<string> = ['00.00','01.00','02.00','03.00','04.00','06.00','07.00','08.00','09.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00','18.00','19.00','20.00','21.00','22.00','23.00']
    const renderNotepadRow = () => {
        return datesData.current ?
            datesData.data.map(el => <NodepadRowContainer key={el.time + el.date} hour={el.time} date={[el.date]} title={el.date}/>)
            :
            hours.map(hour => <NodepadRowContainer key={hour} hour={hour} date={date}/>)
    }

    return (
        <div className={style.container}>
            <div className={style.notepad}>
                <Link to='/' className={style.log_out} onClick={() => toggleCurrentPeriod('month')}> </Link>
                {date.length === 1 ? <div className={style.title}>{date}</div> :
                    datesData.data.length === 0 ? <div className={style.notepad__message}>There aren't notes in the specified range</div> : ''}
                {renderNotepadRow()}
            </div>
        </div>
    )
}

const getDatesData = (state, date: Array<string>): datesDataType => {
    let datesData: datesDataType = {current: false, data: []}
    if(date.length > 1) {
        datesData.current = true
        let dateOne = date[0].split('.').reverse().join('-')
        let dateTwo = date[1].split('.').reverse().join('-')
        for(let el of state.notes) {
            let noteDate = el.date.split('.').reverse().join('-')
            if(moment(noteDate).isBetween(dateOne, dateTwo, undefined, '[]')) datesData.data.push(el)
        }
    }
    return datesData
}



const mapStateToProps = (state, {date}): mapStateToPropsType => {
    return {
        datesData: getDatesData(state, date)
    }
}

export const NotepadContainer: FunctionComponent<any> = connect(mapStateToProps, null)(Notepad)