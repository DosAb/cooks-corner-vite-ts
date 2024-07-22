import { NavLink, useNavigate } from 'react-router-dom'
import logo from "/icons/skillet_cooktop.svg"
import home from "/icons/home.svg"
import search from "/icons/search.svg"
import profile from "/icons/profile.svg"
import exit from "/icons/exit.svg"

import "./navigation.scss"

export default function Navigation()
{
    return <>
        <nav className="navigation">
            <img src={logo} alt="logo" />
            <div className="line"></div>
            <div className="links">
                <NavLink className="link" to="/home">
                    <div >
                        <img src={home} alt="home" />
                    </div>
                </NavLink>
                <NavLink className="link" to="/home/search">
                    <div >
                        <img src={search} alt="search" />
                    </div>
                </NavLink>
                <NavLink className="link" to="/home/profile">
                    <div >
                        <img src={profile} alt="profile" />
                    </div>
                </NavLink>
            </div>
            <div className="exit">
                <img src={exit} alt="home" />
            </div>

        </nav>
    </>
}