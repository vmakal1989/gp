import React from "react"
import {AppStateType} from "../../redux/store-redux"
import moment from "moment"
import {NoteType} from "../../types/types"
import {connect} from "react-redux"
import {Notepad} from "./Notepad"
import { Redirect } from "react-router-dom"

type OwnProps = {
	date: string | string[]
}

type MapStatePropsType = {
	datesData: DatesDataType
	isAuth: boolean
}
export type DatesDataType ={
	current: boolean
	data: Array<NoteType>
}

type PropsType = MapStatePropsType & OwnProps

const NotepadContainer: React.FC<PropsType> = ({date, datesData, isAuth}) => {
	const hours: Array<string> = ['00.00','01.00','02.00','03.00','04.00','06.00','07.00','08.00','09.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00','18.00','19.00','20.00','21.00','22.00','23.00']

	const setPrevTitle = (title: string ): (newTitle: string) => void => {
		let prevTitle: string = title
		return (newTitle: string): string => prevTitle !== newTitle ? prevTitle = newTitle : ''
	}

	const getTitle: (newTitle: string) => void = setPrevTitle('')

	return (
			isAuth ? <Notepad date={date}
							  datesData={datesData}
							  hours={hours}
							  getTitle={getTitle}/>
					: <Redirect to={'/login'}/>

		)
}

const getDatesData = (state: AppStateType, date: Array<string>): DatesDataType => {
	let datesData: DatesDataType = {current: false, data: []}
	if(date.length > 1) {
		datesData.current = true
		let dateOne: string = date[0].split('.').reverse().join('-')
		let dateTwo: string = date[1].split('.').reverse().join('-')
		for(let el of state.notes) {
			let noteDate = el.date.split('.').reverse().join('-')
			if(moment(noteDate).isBetween(dateOne, dateTwo, undefined, '[]')) datesData.data.push(el)
		}
		datesData.data.sort((a: any, b: any) => a.time-b.time)
		datesData.data.sort((a: NoteType, b: NoteType) => {
			// @ts-ignore
			return moment(a.date.split('.').reverse().join('-'))-moment(b.date.split('.').reverse().join('-'))
		})
	}
	return datesData
}

const mapStateToProps = (state: AppStateType, {date}): MapStatePropsType => {
	return {
		datesData: getDatesData(state, date),
		isAuth: state.auth.isAuth
	}
}

export default connect<MapStatePropsType,{}, OwnProps,AppStateType>(mapStateToProps)(NotepadContainer)