import React, {useState} from 'react'
import moment from "moment"
import MomentUtils from "@date-io/moment"
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers"
import {createMuiTheme, ThemeProvider} from "@material-ui/core"
import {amber} from "@material-ui/core/colors"
import style from './ChooseDate.module.css'
import calendar from '../../assets/images/svg/calendar.svg'
import { useHistory } from "react-router-dom";

type PropsType = {}

const ChooseDay: React.FC<PropsType> = () => {
	const [day, setDay] = useState<moment.Moment | null>(moment())
	const [open, setOpen] = useState<boolean>(false)
	const history = useHistory();

	const openDate = (e: moment.Moment | null): void => {
		e && history.push(`/notepad/${e.format('DD.MM.YYYY')}`)
		setOpen(false)
	}

	const defaultMaterialTheme: object = createMuiTheme({
		palette: {
			primary: amber,
		}
	})

	return (
		<div>
			<div className={style.date_icon} onClick={() => setOpen(true)}>
				<img src={calendar} alt="Calendar" title="Choose date"/>
			</div>
			<div className={style.date_field}>
				<ThemeProvider theme={defaultMaterialTheme}>
					<MuiPickersUtilsProvider utils={MomentUtils}>
						<KeyboardDatePicker
							value={day}
							onChange={setDay}
							open={open}
							onClose={() => setOpen(false)}
							onAccept={(e) => openDate(e)}
						/>
					</MuiPickersUtilsProvider>
				</ThemeProvider>
				</div>
		</div>
	)
}

export default ChooseDay