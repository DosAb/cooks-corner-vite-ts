import { useRef, useState } from "react";
import { putUserProfile } from "../../api/profile/profileApi";
import { useSelector, useDispatch } from "react-redux";
import { setProfileModule } from "../../redux/slices/profileSlice";
import { useFormik } from "formik";
import { ProfilePutParams } from "../../api/types";
import closeImg from "/icons/close.svg";
import "./profileModule.scss";

export default function ManageProfile() {
  const [selectedFile, setSelectedFile] = useState();
  const filePicker = useRef();
  const dispatch = useDispatch();

  const handleProfile = async (data: ProfilePutParams) => {
    try {
      const response = await putUserProfile(data);
      console.log(response.data);
    } catch (err) {
      if (!err?.response) {
        console.log(err);
      }
    }
  };

  function closeProfileModule() {
    dispatch(setProfileModule(false));
  }

  function handleUpload(event) {
    console.log(event.target.files[0]);
  }

  function handlePick(event) {
    event.preventDefault();
    filePicker.current.click();
  }

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      username: "",
      bio: "",
    },
    onSubmit: (values, actions) => {
      console.log("submit");
      const profileData = {
        username: values.username,
        bio: values.bio,
      };
      console.log(profileData);
      handleProfile(profileData);
    },
  });

  return (
    <>
      <div className="profile__module">
        <form onSubmit={handleSubmit}>
          <div className="profile__module-close"></div>
          <h3>Manage profile</h3>
          <label htmlFor="name">Change your name</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="your name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
          <label htmlFor="bio">Change your bio</label>
          <input
            type="text"
            id="bio"
            name="bio"
            placeholder="your bio"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.bio}
          />
          <button onClick={handlePick}>Upload a new photo</button>
          <input
            className="hidden"
            ref={filePicker}
            type="file"
            accept="image/*,.png,.jpg,.gif,.web"
            onChange={handleUpload}
          />

          <button type="submit" className="profile__module-btn">
            Save changes
          </button>
          <img onClick={closeProfileModule} src={closeImg} alt="close" />
        </form>
      </div>
    </>
  );
}
