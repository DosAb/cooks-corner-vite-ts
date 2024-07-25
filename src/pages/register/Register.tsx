import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../../schemas";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../api/auth/authApi.ts";
import { setLogin } from "../../redux/slices/loginSlice.ts"
import './register.scss'

export default function Register()
{
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleRegister = async (data) => {
        try {
            const response = await register(data);
            localStorage.setItem("accessToken", response.data.access)
            localStorage.setItem("refreshToken", response.data.refresh)
            console.log('Registration successful:', response);
            navigate("/")
        } catch (err) {
            if (!err?.response) {
                console.log(err);
            }
        }
      };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting,
    } = useFormik({
      initialValues: {
        email: "",
        login: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: registerSchema,
      onSubmit: (values, actions) => {
        const registerData = {
            email: values.email,
            password: values.password,
            username: values.login,
            password_confirm: values.confirmPassword,
        }
        dispatch(setLogin(values.login))
        handleRegister(registerData)
        console.log("submit");
      },
    });

    return <>
        <div className="register">
            <div className="register__title-container">
                <h1 className="register__title">Sign up for delicious <br /> <span>Discoveries!</span> </h1>
            </div>
            <div className="register__form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="login">Name</label>
                    <input
                        type="text"
                        id="login"
                        placeholder="your name"
                        name="login"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.login}
                    />
                    <label htmlFor="email">Gmail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="your email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        placeholder="your password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    <label htmlFor="confirmPassword">Password</label>
                    <input
                        type="text"
                        id="confirmPassword"
                        placeholder="Re-Enter your Password"
                        name="confirmPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                    />
                    <button type="submit" className="register__btn">Sign In</button>
                </form>
                <h4>Already have an account? <span>Sign In Now</span></h4>
            </div>
        </div>
    </>
}