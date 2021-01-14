import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from "react-router-dom"
import { getUser } from '../redux/actions'

const HomePage = () => {

    const dispatch = useDispatch()
    
    useEffect(() => {
            const client_id = localStorage.getItem('client_id')
            if (client_id !== null) {
                dispatch(getUser(client_id))
            }
    },[dispatch])

    const isLoading = useSelector(state => state.get.isLoading)
    const auth = useSelector(state => state.login.auth)
    const data = useSelector(state => state.get.data)
    const fail = useSelector(state => state.get.fail)

    if (fail) return <Redirect to="/login" />
    
    if (isLoading) return <div className="block"><img src="5.gif" alt="Загрузка..."/></div>

    if (auth) {
        return (
        <div className="container">
            <h1>Пользователь</h1>
            <hr />
            <p>ID: <strong>{data.client_id}</strong></p>
            <p>Имя: <strong>{data.name}</strong></p>
            <p>Фамилия: <strong>{data.surname}</strong></p>
            <p>E-mail: <strong>{data.email}</strong></p>
            <p>Телефон: <strong>{data.phone}</strong></p>
        </div>
        )
    } 

    return (
        <div className="container">
            <h1>Вход</h1>
            <hr />
                <div className="block">
                    <Link className="pure-button pure-button-primary" to='/signup'>Регистрация</Link>
                    <p />
                    <Link className="pure-button pure-button-primary" to='/login'>Авторизация</Link>
                </div>
        </div>
    )
}

export default HomePage