import React, {useState} from "react"
import style from "./Notepad.module.css"
import TextareaAutosize from "react-autosize-textarea"
import {connect} from "react-redux"
import {addNote} from "../../redux/notes-reducer"
import {noteType} from "../../types/types";

interface propsType {
    hour: string
    fieldData: fieldDataType
    date: string | string[]
    addNote: (date: string, hour: string, value: string) => void
    title: string | void
}
interface NotepadRowContainerType {
    hour: string
    date: string | string[]
    title: string | void
}

type mapStateToPropsType = {
    fieldData: fieldDataType
}
type fieldDataType = {
    text: string
}
type stateType = {
    notes: noteType[]
}

const NotepadRow: React.FC<propsType> = ({hour, fieldData, date, addNote, title}) => {
    let [noteFieldValue, setNoteFieldValue] = useState<string>(fieldData.text)

    const changeField = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setNoteFieldValue(e.target.value)
    const addNewNote = (): void => addNote(date[0], hour, noteFieldValue.trim())

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

const getFieldData = (state: stateType, date: string[], hour: string): fieldDataType => {
    let fieldData: fieldDataType = {text: ''}
        for(let el of state.notes) {
            if(el.date === date[0] && el.time === hour && el.value) {
                fieldData.text = el.value
                break
            }
        }
    return fieldData
}

const mapStateToProps = (state: stateType, {date, hour}): mapStateToPropsType => {
    return {
        fieldData: getFieldData(state, date, hour)
    }

}

export const NotepadRowContainer: React.FC<NotepadRowContainerType> = connect(mapStateToProps, {addNote})(NotepadRow)