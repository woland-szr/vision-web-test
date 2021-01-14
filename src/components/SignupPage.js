import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signupUser } from '../redux/actions'
import { Formik } from 'formik'
import { validationsSchemaSignup } from './validationsSchema'
import TextInput from './TextInput'


const SignupPage = () => {
    const initialValues = {
        name: '',
        surname: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        invited_by: 'RU-637164',
        country_key: 'RU'
    }
    const dispatch = useDispatch()
    const onSubmit = useCallback(values => dispatch(signupUser(values)), [dispatch])
    const signup = useSelector(state => state.signup)
    const client_id = localStorage.getItem('client_id')


    if (client_id) return <Redirect to="/" />
    
    if (signup.success) return <Redirect to="/login"/>
    
    return (
        <div className="container">
            <h1>Регистрация</h1>
            <hr />
            <Formik
                initialValues={initialValues}
                validateOnBlur
                onSubmit={onSubmit}
                validationSchema ={validationsSchemaSignup}
            >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <form className="pure-form pure-form-aligned">
                    <TextInput
                        title="Имя"
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                        errors={errors.name}
                        touched={touched.name}
                        name="name"
                    />
                    <TextInput
                        title="Фамилия"
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.surname}
                        errors={errors.surname}
                        touched={touched.surname}
                        name="surname"
                    />
                    <TextInput
                        title="Телефон"
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.phone}
                        errors={errors.phone}
                        touched={touched.phone}
                        name="phone"
                    />
                    <TextInput
                        title="Email"
                        type="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        errors={errors.email}
                        touched={touched.email}
                        name="email"
                    />
                    <TextInput
                        title="Пароль"
                        type="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        errors={errors.password}
                        touched={touched.password}
                        name="password"
                    />
                    <TextInput
                        title="Подтверждение пароля"
                        type="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.confirmPassword}
                        errors={errors.confirmPassword}
                        touched={touched.confirmPassword}
                        name="confirmPassword"
                    />
                    <div className="pure-controls">
                        <button
                            className="pure-button pure-button-primary"
                            disabled = {!isValid && !dirty}
                            onClick = {handleSubmit}
                            type = 'submit'
                        >Отправить</button>
                    </div>
                </form>
            )}
            </Formik>
        </div>
    )
}

export default SignupPage