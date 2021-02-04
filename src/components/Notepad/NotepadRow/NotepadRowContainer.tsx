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
	editNote: (id: number, value: string) => void
	removeNote: (id: number) => void
}
type OwnProps = {
	hour: string
	date: string | string[]
	title: string | void
}
type NoteDataType = {
	id: number
	value: string
}

const NotepadRowContainer: React.FC<NotepadRowContainerType> = ({hour, date, title, noteData, addNewNote, editNote, removeNote}) => {
	let prevFieldValue: string = noteData.value
	let [noteFieldValue, setNoteFieldValue] = useState<string>(noteData.value)
	useEffect(()=> setNoteFieldValue(noteData.value),[date])

	const changeField = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setNoteFieldValue(e.target.value)

	const confirmField = (): void => {
		!prevFieldValue && noteFieldValue.trim() && addNewNote(date[0], hour, noteFieldValue)
		prevFieldValue && prevFieldValue !== noteFieldValue && noteFieldValue.trim() && editNote(noteData.id, noteFieldValue)
		prevFieldValue && !noteFieldValue && !noteFieldValue.trim() && removeNote(noteData.id)
	}

	return (
		<NotepadRow hour={hour}
					value={noteFieldValue}
					addNote={confirmField}
					title={title}
					changeField={changeField} />
	)
}

const getFieldData = (state: AppStateType, date: string[], hour: string): NoteDataType => {
	let noteData: NoteDataType  = {value: '', id: 0}
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

export default connect<MapStatePropsType, MapDispatchProps, OwnProps, AppStateType>(mapStateToProps, {addNewNote, editNote, removeNote})(NotepadRowContainer)