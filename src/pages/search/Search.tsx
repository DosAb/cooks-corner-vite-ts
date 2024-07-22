import { useState } from "react"
import "./search.scss"
import searchIcon from '/icons/search.svg'

export default function Search()
{
    const [searchPlaceholder, setSearchPlaceholder] = useState("search recipes")

    return <>
        <div className="search">
            <h1>What to eat today?</h1>
            <div className="search__switch-btns">
                <button>Chefs</button>
                <button>Recipes</button>
            </div>
            <form>
                <input type="text" placeholder={searchPlaceholder} />
                <button type="sumbit"><img src={searchIcon} alt="searchIcon" /></button>
            </form>
            <button className="search__btn-recipe">Add your recipes</button>
        </div>
    </>
}