import React from "react"
import style from "../Notepad.module.css"
import TextareaAutosize from "react-autosize-textarea"

type propsType = {
    hour: string
    addNote: () => void
    title: string | void
    value: string
    changeField: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}


export const NotepadRow: React.FC<propsType> = ({hour, addNote, title, value,changeField}) => {
    return (
        <div>
            { title ? <div className={style.title__notepad_row}>{title}</div> : null}
            <div className={style.notepad_row}>
                <span className={style.time}>{hour}</span><TextareaAutosize value={value}
                                                                            className={style.field}
                                                                            onChange={changeField}
                                                                            onBlur={addNote}
            />
            </div>
        </div>
    )
}
