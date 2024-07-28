import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profileModule",
  initialState: {value: false},
  reducers: {
    setProfileModule: (state, actions) => {
      state.value = actions.payload
    }
  }
})

export const { setProfileModule } = profileSlice.actions;

export default profileSlice.reducer;