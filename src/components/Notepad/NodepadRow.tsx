import React, {FunctionComponent, useState} from "react"
import style from "./Notepad.module.css";
import TextareaAutosize from "react-autosize-textarea";
import {connect} from "react-redux";
import {addNote} from "../../redux/notes-reducer"
import { noteType } from "../../types/types";

interface propsType {
    hour: string
    fieldValue: string
    date: string
    addNote: any
}
interface containerPropsType {
    hour: string
    date: string
}
type mapStateToPropsType = {
    fieldValue: string
}

const NodepadRow: FunctionComponent<propsType> = ({hour, fieldValue, date, addNote}) => {
    let [noteFieldValue, setNoteFieldValue] = useState<string>(fieldValue)
    const changeField = (e) => {
        setNoteFieldValue(e.target.value)
    }

    const addNewNote = () => {
        const newNote: noteType = {
            date : `${date}`,
            time: `${hour}.00`,
            value: noteFieldValue.trim()
        }
        addNote(newNote)
    }

    return (
        <div className={style.notepad_row}>
            <span className={style.time}>{hour}.00</span><TextareaAutosize value={noteFieldValue}
                                                                           className={style.field}
                                                                           onChange={changeField}
                                                                           onBlur={addNewNote}
                                                                           />
        </div>
    )
}

const getFieldValue = (state, date, hour): string => {
    let fieldValue = ''
    for(let el of state.notes) {
        if(el.date === date && el.time === `${hour}.00` && el.value) {
            fieldValue = el.value
            break
        } else {
            fieldValue = ''
        }
    }
    return fieldValue
}

const mapStateToProps = (state, {date, hour}): mapStateToPropsType => {
    return {
        fieldValue: getFieldValue(state, date, hour)
    }

}

export const NodepadRowContainer: FunctionComponent<containerPropsType> = connect(mapStateToProps, {addNote})(NodepadRow)