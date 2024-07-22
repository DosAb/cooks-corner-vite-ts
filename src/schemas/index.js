import * as yup from "yup"

export const registerSchema = yup.object().shape({
    email: yup
        .string()
        .email("Not valid email")
        .required("Email is required"),
        
    login: yup
        .string()
        .min(4, 'minimum 4 symbols')
        .matches(/^[A-Za-z]*$/, 'Only latin letters')
        .required('Login is required'),
        
    password: yup
        .string()
        .min(8, 'From 8 to 15 symbols')
        .max(15, 'From 8 to 15 symbols')
        .matches(/[a-z]/, 'Bla bla')
        .matches(/[A-Z]/, 'Bla bla')
        .matches(/\d/, 'Minimum 1 number')
        .matches(/[^a-zA-Z0-9]/, 'Minimum 1 special symbol')
        .required('Password is required'),
        
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password must match")
        .required("Password must match")
})

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email("Not valid email")
        .required("Email is required"),
        
    password: yup
        .string()
        .min(5, 'От 8 до 15 символов')
        .max(15, 'От 8 до 15 символов')
        .matches(/[a-z]/, 'Строчные и прописные буквы')
        .matches(/[A-Z]/, 'Строчные и прописные буквы')
        .matches(/\d/, 'Минимум 1 цифра')
        .matches(/[^a-zA-Z0-9]/, 'Минимум 1 спецсимвол (!, ", #, $...)')
        .required('Требуется пароль'),
})


