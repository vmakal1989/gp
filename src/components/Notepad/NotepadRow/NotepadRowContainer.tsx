import React, {useState} from 'react'
import {AppStateType} from "../../../redux/store-redux";
import {connect} from "react-redux";
import {addNewNote} from "../../../redux/notes-reducer";
import {NotepadRow} from "./NotepadRow";

type NotepadRowContainerType = MapStatePropsType & MapDispatchProps & OwnProps

type MapStatePropsType = {
	fieldData: string
}
type MapDispatchProps = {
	addNewNote: (date: string, hour: string, value: string) => void
}
type OwnProps = {
	hour: string
	date: string | string[]
	title: string | void
}

const NotepadRowContainer: React.FC<NotepadRowContainerType> = ({hour, date, title, fieldData, addNewNote}) => {

	let [noteFieldValue, setNoteFieldValue] = useState<string>(fieldData)

	const changeField = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setNoteFieldValue(e.target.value)
	const addNote = (): void => addNewNote(date[0], hour, noteFieldValue.trim())

	return (
		<NotepadRow hour={hour}
					value={noteFieldValue}
					addNote={addNote}
					title={title}
					changeField={changeField} />
	)
}

const getFieldData = (state: AppStateType, date: string[], hour: string): string => {
	let fieldData: string = ''
	for(let el of state.notes) {
		if(el.date === date[0] && el.time === hour && el.value) {
			fieldData = el.value
			break
		}
	}
	return fieldData
}

const mapStateToProps = (state: AppStateType, {date, hour}): MapStatePropsType => {
	return {
		fieldData: getFieldData(state, date, hour)
	}

}

export default connect<MapStatePropsType, MapDispatchProps, OwnProps, AppStateType>(mapStateToProps, {addNewNote})(NotepadRowContainer)