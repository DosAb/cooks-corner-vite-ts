import ProfileModule from "../../components/profileModule/ProfileModule.tsx"
import RecipeList from "../../components/recipe/RecipeList.tsx"
import idiotImg from "/imgs/idiot.jpg"
import "./profile.scss"
import { useState } from "react"

export default function Profile()
{
    const [showModule, setShowModule] = useState(false)

    return <>
        <div className="profile">
            <div className="profile__info">
                <img src={idiotImg} alt="idiot" />
                <div className="profile__info-description">
                    <div className="author__info-followers">
                        <div>
                            <h2>29</h2>
                            <p>recipe</p>
                        </div>
                        <div>
                            <h2>144</h2>
                            <p>followers</p>
                        </div>
                        <div>
                            <h2>118</h2>
                            <p>follow</p>
                        </div>
                    </div>
                    <h3>Sarthak Ranjan Hota</h3>
                    <p>I'm a passionate chef who loves creating delicious dishes with flair</p>
                    <button onClick={()=>{setShowModule(true)}}>Manage Profile</button>
                </div>
            </div>
            <RecipeList />
            {showModule && <ProfileModule />}
        </div>
    </>
}