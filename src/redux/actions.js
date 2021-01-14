import axios from 'axios'
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, GET_SUCCESS, GET_FAILURE, LOGIN_REQUEST, GET_REQUEST } from "./types";

const BASE_URL = 'http://erp.apptrix.ru/api/clients/'

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access')
    token !== null ? config.headers.Authorization = `Bearer ${token}` : config.headers.Authorization = ''
    return config
});

export function signupUser(userData) {
    return dispatch => {
        const data = {
            user: {
                email: userData.email,
                password: userData.password
            },
            invited_by: userData.invited_by,
            name: userData.name,
            surname: userData.surname,
            phone: userData.phone,
            country_key: userData.country_key
        }
        dispatch({type: SIGNUP_REQUEST})

        axios.post(BASE_URL+'create/', data)
        .then(function (response) {
            dispatch({type: SIGNUP_SUCCESS})
            alert('Успешная регистрация! Переход на страницу авторизации.')
        })
        .catch(function (error) {
            dispatch({type: SIGNUP_FAILURE})
            alert("Что-то пошло не так, попробуйте еще раз.")
        })
    }
}

export function loginUser(userData) {
    return dispatch => {
        dispatch({type: LOGIN_REQUEST})
        axios.post(BASE_URL+'token/', userData)
            .then(function (response) {
                dispatch({type: LOGIN_SUCCESS})
                localStorage.setItem('client_id', response.data.client_id)
                localStorage.setItem('access', response.data.access)
                localStorage.setItem('refresh', response.data.refresh)
            })
            .catch(function (error) {
                dispatch({type: LOGIN_FAILURE, payload: error})
                alert("Неверные данные для входа! Попробуйте еще раз.")
            })
    }
}

export function getUser(client_id) {
    return dispatch => {
        dispatch({type: GET_REQUEST})
        axios.get(BASE_URL+client_id)
            .then(function (response) {
                dispatch({type: LOGIN_SUCCESS})
                dispatch({type: GET_SUCCESS, payload: response})
            })
            .catch(function (error) {
                    const data = {'refresh': localStorage.getItem('refresh')}
                    axios.post(BASE_URL+'refresh/', data)
                    .then(function (response) {
                        dispatch({type: LOGIN_SUCCESS})
                        localStorage.setItem('client_id', response.data.client_id)
                        localStorage.setItem('access', response.data.access)
                        localStorage.setItem('refresh', response.data.refresh)
                    })
                    .catch(function (error) {
                        localStorage.clear()
                        dispatch({type: GET_FAILURE})
                    })                   
            })
    }

}