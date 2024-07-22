import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import RecipeList from "../../components/recipe/RecipeList.tsx"

import "./home.scss"

export default function Home()
{
    const login = useSelector((state : string) => state.login);

    const [name, setName] = useState(login.value)
    const [category, setCategory] = useState('Breakfast')
    const [categoryList, setCategoryList] = useState([])
    const [page, setPage] = useState(1)

    const [breakfastFocus, setBreakfastFocus] = useState(true)
    const [lunchFocus, setLunchFocus] = useState(false)
    const [dinnerFocus, setDinnerFocus] = useState(false)

    // const getCategoryData = async (categoryType) => {
    //     const token = localStorage.getItem("token")
    //     try {
    //         const response = await getCategory(token, categoryType, page);
    //         console.log(response.data);
    //         setCategoryList(response.data)
    //         // navigate('/home')
    //     } catch (err) {
    //         if (!err?.response) {
    //         console.log(err);
    //         }
    //     }
    // }

    useEffect(()=>{
        // getCategoryData()
    },[])

    function handleBreakfastFocus()
    {
        setBreakfastFocus(true)
        setLunchFocus(false)
        setDinnerFocus(false)
        setCategory("Breakfast")
        // getCategoryData("Breakfast")
    }
    function handleLunchFocus()
    {
        setBreakfastFocus(false)
        setLunchFocus(true)
        setDinnerFocus(false)
        // getCategoryData("Lunch")
    }
    function handleDinnerFocus()
    {
        setBreakfastFocus(false)
        setLunchFocus(false)
        setDinnerFocus(true)
        // getCategoryData("Dinner")
    }


    return <>
        <div className="home">
            <h3 className="home__title">Hi, {name}. UI Designer & Cook</h3>
            <div className="home__category">
                <h3>Category</h3>
                <div className="home__category-list">
                    <button onClick={handleBreakfastFocus} className={breakfastFocus ? "focused" : ""} autoFocus>Breakfast</button>
                    <button onClick={handleLunchFocus} className={lunchFocus ? "focused" : ""}>Lunch</button>
                    <button onClick={handleDinnerFocus} className={dinnerFocus ? "focused" : ""}>Dinner</button>
                </div>
                <RecipeList />
            </div>
        </div>
    </>
}