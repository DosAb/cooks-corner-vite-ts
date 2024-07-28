import ProfileModule from "../../components/profileModule/ProfileModule.tsx"
import RecipeList from "../../components/recipe/RecipeList.tsx"
import { getUserProfile } from "../../api/profile/profileApi.ts"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { setProfileModule } from "../../redux/slices/profileSlice";
import idiotImg from "/imgs/idiot.jpg"
import "./profile.scss"

export default function Profile()
{
    const [showModule, setShowModule] = useState(false)
    const [profile, setProfile] = useState({})
    const profileModule = useSelector((state) => state.profileModule.value);
    const dispatch = useDispatch()

    function showProfileModule(){
        dispatch(setProfileModule(true));
        console.log(profileModule)
    }
    
    const getCategoryData = async () => {
        try {
            const response = await getUserProfile();
            const {data} = response
            console.log(data);
            setProfile(data)
            // navigate('/home')
        } catch (err) {
            if (!err?.response) {
                console.log(err);
            }
        }
    }

    useEffect(()=>{
        getCategoryData()
    },[])

    return <>
        <div className="profile">
            <div className="profile__info">
                <img src={profile.profile_picture ?? idiotImg } alt="idiot" />
                <div className="profile__info-description">
                    <div className="author__info-followers">
                        <div>
                            <h2>{profile.recipes ?? 0}</h2>
                            <p>recipes</p>
                        </div>
                        <div>
                            <h2>{profile.followers ?? 0}</h2>
                            <p>followers</p>
                        </div>
                        <div>
                            <h2>{profile.following ?? 0}</h2>
                            <p>follow</p>
                        </div>
                    </div>
                    <h3>{profile.username}</h3>
                    <p>{profile.bio ?? "your bio"}</p>
                    <button onClick={showProfileModule}>Manage Profile</button>
                </div>
            </div>
            <RecipeList />
            {profileModule && <ProfileModule />}
        </div>
    </>
}