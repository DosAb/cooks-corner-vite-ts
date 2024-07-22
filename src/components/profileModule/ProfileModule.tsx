import "./profileModule.scss"

export default function ManageProfile()
{
    return <>
        <div className="profile__module">
            <form>
                <div className="profile__module-close"></div>
                <h3>Manage profile</h3>
                <label htmlFor="name">Change your name</label>
                <input type="text" id="name" placeholder="your name" />
                <label htmlFor="bio">Change your bio</label>
                <input type="text" id="bio" placeholder="your bio" />
            </form>
        </div>
    </>
}