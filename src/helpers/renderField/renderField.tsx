import classNames from "classnames";
import React from "react";

export const renderField = ({input, placeholder, label, type,style, meta: { touched, error, warning }}) => (
	<div>
		<label>{label}</label>
		<div className={style.field_box}>
			<input {...input} placeholder={placeholder} type={type} className={classNames(style.field, error && touched ? style.field_error : null)}/>
			<div className={style.error}>
				{touched &&
				((error && <span>{error}</span>) ||
					(warning && <span>{warning}</span>))}
			</div>
		</div>
	</div>
)