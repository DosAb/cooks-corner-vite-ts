import { useState } from "react";
import { searchRecipe } from "../../api/recipes/recipeApi";
import { NavLink } from "react-router-dom";
import RecipeList from "../../components/recipe/RecipeList";
import searchIcon from "/icons/search.svg";
import "./search.scss";

export default function Search() {
  const [searchPlaceholder, setSearchPlaceholder] = useState("search recipes");
  const [recipes, setRecipes] = useState([]);

  const getSearchData = async () => {
    try {
      const response = await searchRecipe("суп");
      const { data } = response.data;
      setRecipes(data);
      console.log(data);
      // navigate('/home')
    } catch (err) {
      if (!err?.response) {
        console.log(err);
      }
    }
  };

  function handleSearch() {
    getSearchData();
  }

  return (
    <>
      <div className="search">
        <h1>What to eat today?</h1>
        <div className="search__switch-btns">
          <button>Chefs</button>
          <button>Recipes</button>
        </div>
        <form>
          <input type="text" placeholder={searchPlaceholder} />
          <button
            onClick={(e) => {
              e.preventDefault();
              getSearchData();
            }}
            type="submit"
          >
            <img src={searchIcon} alt="searchIcon" />
          </button>
        </form>
        <button className="search__btn-recipe">Add your recipes</button>
        <div className="recipes">
          {recipes.map((data) => (
            <NavLink key={data.name} to={`/home/detail/${data.slug}`}>
                <RecipeList
                  key={data.name}
                  img={data.meal_picture}
                  title={data.name}
                  author={data.author_name}
                  likes={data.likes}
                  saves={data.saves}
                />
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
