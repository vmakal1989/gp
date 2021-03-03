import React from 'react'
import style from './Preloader.module.css'
import preloader from '../../assets/images/preloader.gif'
const Preloader = () => {
	return (
		<div className={style.container}>
			<img className={style.preloaderImage} src={preloader} alt={preloader}></img>
		</div>
	)
}

export default Preloader