import * as yup from 'yup'

export const validationsSchemaSignup = yup.object().shape({
    name: yup.string().typeError('Должно быть строкой').min(2, 'от 2 до 255 символов').max(255, 'от 2 до 255 символов').required('Обязательное поле'),
    surname: yup.string().typeError('Должно быть строкой').min(2, 'от 2 до 255 символов').max(255, 'от 2 до 255 символов').required('Обязательное поле'),
    password:  yup.string().typeError('Должно быть строкой').min(8,'от 8 до 255 символов').max(255, 'от 8 до 255 символов').required('Обязательное поле'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают!').required('Обязательное поле'),
    email: yup.string().email('Введите правильный email').required('Обязательное поле')
})

export const validationsSchemaLogin = yup.object().shape({
    password:  yup.string().typeError('Должно быть строкой').min(8,'от 8 до 255 символов').max(255, 'от 8 до 255 символов').required('Обязательное поле'),
    username: yup.string().email('Введите правильный email').required('Обязательное поле')
})
