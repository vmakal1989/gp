import React, {FunctionComponent, useState} from "react"
import style from "./Notepad.module.css"
import TextareaAutosize from "react-autosize-textarea"
import {connect} from "react-redux"
import {addNote} from "../../redux/notes-reducer"
import { noteType } from "../../types/types"

interface propsType {
    hour: string
    fieldData: fieldDataType
    date: string
    addNote: any
    title: string
}
type mapStateToPropsType = {
    fieldData: fieldDataType
}

type fieldDataType = {
    text: string
}

const NodepadRow: FunctionComponent<propsType> = ({hour, fieldData, date, addNote, title}) => {
    let [noteFieldValue, setNoteFieldValue] = useState<string>(fieldData.text)
    const changeField = (e) => {
        setNoteFieldValue(e.target.value)
    }

    const addNewNote = () => {
        const newNote: noteType = {
            date : `${date}`,
            time: `${hour}`,
            value: noteFieldValue.trim()
        }
        addNote(newNote)
    }

    return (
        <div>
            { title ? <div className={style.title__notepad_row}>{title}</div> : null}
            <div className={style.notepad_row}>
                <span className={style.time}>{hour}</span><TextareaAutosize value={noteFieldValue}
                                                                            className={style.field}
                                                                            onChange={changeField}
                                                                            onBlur={addNewNote}
            />
            </div>
        </div>

    )
}

const getFieldData = (state, date, hour): fieldDataType => {
    let fieldData: fieldDataType = {text: ''}
        for(let el of state.notes) {
            if(el.date === date[0] && el.time === hour && el.value) {
                fieldData.text = el.value
                break
            }
        }
    return fieldData
}

const mapStateToProps = (state, {date, hour}): mapStateToPropsType => {
    return {
        fieldData: getFieldData(state, date, hour)
    }

}

export const NodepadRowContainer: FunctionComponent<any> = connect(mapStateToProps, {addNote})(NodepadRow)