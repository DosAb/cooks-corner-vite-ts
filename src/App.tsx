import { Route, Routes } from "react-router-dom";

import Login from './pages/login/Login.tsx'
import Register from './pages/register/Register.tsx'
import Home from './pages/home/Home.tsx'
import Detail from './pages/detail/Detail.tsx'
import Author from './pages/author/Author.tsx'
import Profile from './pages/profile/Profile.tsx'
import Search from './pages/search/Search.tsx'

import NavLayout from "./layout/NavLayout.tsx";

import './styles/reset.scss'
import './styles/style.scss'

function App() {

  return (
    <>
    <Routes>
      <Route path="/home" element={<NavLayout />}>
        <Route index element={<Home />} />
        <Route path="author" element={<Author />} />
        <Route path="detail" element={<Detail />} />
        <Route path="profile" element={<Profile />} />
        <Route path="search" element={<Search />} />
      </Route >
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>
    </>
  )
}

export default App
