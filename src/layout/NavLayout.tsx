import { Outlet } from 'react-router-dom';
import Navigation from "../components/navigation/Navigation.tsx"

export default function NavLayout()
{
    return <>
        <Navigation />
        <Outlet />
    </>
}