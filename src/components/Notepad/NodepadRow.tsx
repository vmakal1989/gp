import React, {FunctionComponent} from "react"
import style from "./Notepad.module.css";
import TextareaAutosize from "react-autosize-textarea";
interface propsType {
    hour: string
}

export const NodepadRow: FunctionComponent<propsType> = ({hour}) => {
    return (
        <div className={style.notepad_row}>
            <span className={style.time}>{hour}.00</span><TextareaAutosize  className={style.field} />
        </div>
    )
}