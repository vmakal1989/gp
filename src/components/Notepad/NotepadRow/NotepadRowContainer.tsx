import React, {useEffect, useState} from 'react'
import {AppStateType} from "../../../redux/store-redux";
import {connect} from "react-redux";
import {addNewNote, editNote, removeNote} from "../../../redux/notes-reducer";
import {NotepadRow} from "./NotepadRow";

type NotepadRowContainerType = MapStatePropsType & MapDispatchProps & OwnProps

type MapStatePropsType = {
	noteData: NoteDataType
}
type MapDispatchProps = {
	addNewNote: (date: string, hour: string, value: string) => void
	editNote: (id: string, value: string, date: string, hour: string) => void
	removeNote: (id: string) => void
}
type OwnProps = {
	hour: string
	date: string | string[]
	title: string | void
}
type NoteDataType = {
	id: string
	value: string
}

const NotepadRowContainer: React.FC<NotepadRowContainerType> = (props) => {
	let prevFieldValue: string = props.noteData.value
	let [noteFieldValue, setNoteFieldValue] = useState<string>(props.noteData.value)
	useEffect(()=> setNoteFieldValue(props.noteData.value),[props.date])

	const changeField = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setNoteFieldValue(e.target.value)

	const confirmField = (): void => {
		!prevFieldValue && noteFieldValue.trim() &&
			props.addNewNote(props.date[0], props.hour, noteFieldValue)
		prevFieldValue && prevFieldValue !== noteFieldValue && noteFieldValue.trim() &&
			props.editNote(props.noteData.id, props.date[0], props.hour, noteFieldValue)
		prevFieldValue && !noteFieldValue && !noteFieldValue.trim() &&
			props.removeNote(props.noteData.id)
	}

	return (
		<NotepadRow hour={props.hour}
					value={noteFieldValue}
					addNote={confirmField}
					title={props.title}
					changeField={changeField} />
	)
}

const getFieldData = (state: AppStateType, date: string[], hour: string): NoteDataType => {
	let noteData: NoteDataType  = {value: '', id: ''}
	for(let el of state.notes) {
		if(el.date === date[0] && el.time === hour && el.value) {
			noteData.value = el.value
			noteData.id = el.id
			break
		}
	}
	return noteData
}

const mapStateToProps = (state: AppStateType, {date, hour}): MapStatePropsType => {
	return {
		noteData: getFieldData(state, date, hour)
	}

}

export default connect<MapStatePropsType, MapDispatchProps, OwnProps, AppStateType>
	(mapStateToProps, {addNewNote, editNote, removeNote})(NotepadRowContainer)