import React from "react"
import {AppStateType} from "../../redux/store-redux"
import moment from "moment"
import {noteType} from "../../types/types"
import {connect} from "react-redux"
import {Notepad} from "./Notepad"

type PropsType = {
	date: string | string[]
	toggleCurrentPeriod: (type: string) => void
	datesData: DatesDataType
}

type MapStateToPropsType = {
	datesData: DatesDataType
}
export type DatesDataType ={
	current: boolean
	data: Array<noteType>
}

const NotepadContainer: React.FC<PropsType> = ({date, toggleCurrentPeriod, datesData}) => {
	const hours: Array<string> = ['00.00','01.00','02.00','03.00','04.00','06.00','07.00','08.00','09.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00','18.00','19.00','20.00','21.00','22.00','23.00']

	const setPrevTitle = (title: string ): (newTitle: string) => void => {
		let prevTitle: string = title
		return (newTitle: string): string => prevTitle !== newTitle ? prevTitle = newTitle : ''
	}

	const getTitle: (newTitle: string) => void = setPrevTitle('')

	return (
		<Notepad date={date}
				 datesData={datesData}
				 toggleCurrentPeriod={toggleCurrentPeriod}
				 hours={hours}
				 getTitle={getTitle}/>
		)
}

const getDatesData = (state: AppStateType, date: Array<string>): DatesDataType => {
	let datesData: DatesDataType = {current: false, data: []}
	if(date.length > 1) {
		datesData.current = true
		let dateOne = date[0].split('.').reverse().join('-')
		let dateTwo = date[1].split('.').reverse().join('-')
		for(let el of state.notes) {
			let noteDate = el.date.split('.').reverse().join('-')
			if(moment(noteDate).isBetween(dateOne, dateTwo, undefined, '[]')) datesData.data.push(el)
		}
		datesData.data.sort((a: any, b: any) => a.time-b.time)
		datesData.data.sort((a: noteType,b: noteType) => {
			// @ts-ignore
			return moment(a.date.split('.').reverse().join('-'))-moment(b.date.split('.').reverse().join('-'))
		})
	}
	return datesData
}

const mapStateToProps = (state: AppStateType, {date}): MapStateToPropsType => {
	return {
		datesData: getDatesData(state, date)
	}
}

export default connect(mapStateToProps)(NotepadContainer)