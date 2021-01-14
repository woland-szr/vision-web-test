import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginUser } from '../redux/actions'
import { Formik } from 'formik'
import { validationsSchemaLogin } from './validationsSchema'
import TextInput from './TextInput'


const LoginPage = () => {
    const initialValues = {
        username: '',
        password: ''
    }
    const dispatch = useDispatch()
    const onSubmit = useCallback(values => dispatch(loginUser(values)), [dispatch])
    const auth = useSelector(state => state.login.auth)
    const client_id = localStorage.getItem('client_id')

    if (auth || client_id) return <Redirect to="/" />

    return (
            <div className="container">
            <h1>Вход</h1>
            <hr />
            <Formik
                initialValues={initialValues}
                validateOnBlur
                onSubmit={onSubmit}
                validationSchema ={validationsSchemaLogin}
            >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <form className="pure-form pure-form-aligned">
                    <TextInput
                        title="Email"
                        type="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.username}
                        errors={errors.username}
                        touched={touched.username}
                        name="username"
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
                <div className="pure-controls">
                    <button
                        className="pure-button pure-button-primary"
                        disabled = {!isValid && !dirty}
                        onClick = {handleSubmit}
                        type = 'submit'
                    >Войти</button>
                </div>
            </form>
            )}
            </Formik>
        </div>
    )
    
}

export default LoginPage