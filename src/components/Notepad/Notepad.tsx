import React, {FunctionComponent} from 'react'
import { Link } from 'react-router-dom'
import style from './Notepad.module.css'
import {NodepadRowContainer} from "./NodepadRow";

interface propsType {
    date: string
}


export const Notepad: FunctionComponent<propsType> = ({date}) => {
    const hours: Array<string> = ['00','01','02','03','04','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
    return (
        <div className={style.container}>
            <div className={style.notepad}>
                <Link to='/' className={style.log_out}></Link>
                <div className={style.title}>
                    {date}
                </div>
                {hours.map(hour => <NodepadRowContainer key={hour} hour={hour} date={date}/>)}
            </div>
        </div>
    )
}