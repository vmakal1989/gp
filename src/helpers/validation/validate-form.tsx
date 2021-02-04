export const validate = (values) => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Required'
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Password doesn't match"
    }
    return errors
}
