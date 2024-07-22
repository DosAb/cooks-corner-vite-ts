import { useFormik } from "formik";
import { NavLink, useNavigate } from 'react-router-dom'
import { loginSchema } from "../../schemas";
import './login.scss'

export default function Login()
{
    const navigate = useNavigate()

    // const handleLogin = async (data) =>{
    //     try {
    //         const response = await postLogin(data);
    //         console.log(response.data);
    //         localStorage.setItem("token", response.data.access)
    //         localStorage.setItem("refreshToken", response.data.refresh)
    //         navigate('/home')
    //     } catch (err) {
    //         if (!err?.response) {
    //         console.log(err);
    //         }
    //     }
    // }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting,
    } = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values, actions) => {
        console.log("submit");
        const loginData = {
            email: values.email,
            password: values.password
        }
        // handleLogin(loginData)
      },
    });

    return <>
        <div className="login">
            <div className="login__title-container">
                <h1 className="login__title">Welcome Back  <br /> To <span> CooksCorner</span> </h1>
            </div>
            <div className="login__form">
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="login__btn">Sign In</button>
                </form>
                <h4>I don’t have an account? <NavLink to="/register"><span>Sign Up Now</span></NavLink></h4>
            </div>
        </div>
    </>
}