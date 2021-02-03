import React, {FunctionComponent, useEffect, useState} from 'react'
import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import style from './SelectDates.module.css'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import {amber} from '@material-ui/core/colors'
import moment from 'moment'
import {Link} from 'react-router-dom'

interface propsType {
	setShowSelectedDates: (type: boolean) => void
	toggleCurrentPeriod: (type: string) => void
}

export const SelectDates: FunctionComponent<propsType> = ({setShowSelectedDates, toggleCurrentPeriod}) => {
	const [dateOne, changeDateOne] = useState<null | object>(moment())
	const [dateTwo, changeDateTwo] = useState<null | object>(moment())
	const [isValidDates, setValidDates] = useState<boolean>(true)

	useEffect(() => {
		setValidDates(moment(dateOne).isSameOrBefore(dateTwo))
	},[dateOne, dateTwo] )

	const defaultMaterialTheme = createMuiTheme({
		palette: {
			primary: amber,
		}
	})

	const handleSubmit = (): void => {
		if(isValidDates) {
			setShowSelectedDates(false)
			toggleCurrentPeriod('show notes')
		}
	}

	return (
		<div className={style.dates__wrapper}>
			<div className={style.dates__title}>Set interval dates</div>
			<div className={style.dates__container}>
				<ThemeProvider theme={defaultMaterialTheme}>
					<MuiPickersUtilsProvider utils={MomentUtils}>
						<KeyboardDatePicker
							autoOk
							value={dateOne}
							onChange={changeDateOne}
							format="DD/MM/yyyy"
							className={style.dates__field}
							InputAdornmentProps={{ position: "start" }}
						/>
						<KeyboardDatePicker
							autoOk
							format="DD/MM/yyyy"
							value={dateTwo}
							onChange={changeDateTwo}
							className={style.dates__field}
							InputAdornmentProps={{ position: "start" }}
						/>
					</MuiPickersUtilsProvider>
				</ThemeProvider>
			</div>
			{!isValidDates ? <div className={style.dates__error}>Dates aren't correct!</div> : null}
			<div className={style.dates__button_box}>
				{ isValidDates ?
					<Link to={`/notepad/${moment(dateOne).format("DD.MM.yyyy")}-${moment(dateTwo).format("DD.MM.yyyy")}` }><button className={style.dates__button} onClick={handleSubmit}>Send</button></Link> :
					<button className={style.dates__button} onClick={handleSubmit}>Send</button> }
			</div>
		</div>
	)
}