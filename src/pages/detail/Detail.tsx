import { NavLink, useParams } from "react-router-dom";
import { getRecipeDetail } from "../../api/recipes/recipeApi";
import detailBackground from "/imgs/detailBackground.jpg";
import clock from "/icons/clock.svg";

import "./detail.scss";
import { useEffect, useState } from "react";

export default function Detail() {
  const [recipeData, setRecipeData] = useState();

  const { id } = useParams();
  console.log();

  const getRecipeData = async () => {
    try {
      const response = await getRecipeDetail(id);
      const { data } = response;
      console.log(data);

      setRecipeData(data);
      // navigate('/home')
    } catch (err) {
      if (!err?.response) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getRecipeData();
  }, []);

  return (
    <>
      {recipeData ? (
        <div className="detail">
          <div className="detail__backround">
            <img src={recipeData.meal_picture ?? ""} alt="mealImg" />
          </div>
          <div className="recipe">
            <h3 className="recipe__name">{recipeData.name}</h3>
            <h5 className="recipe__author">by {recipeData.author_name}</h5>
            <div className="recipe__time">
              <img src={clock} alt="clock" />
              <h4>{recipeData.preparation_time} min</h4>
            </div>
            <div className="recipe__dificulty">{recipeData.difficulty}</div>
            <div className="recipe__description">
              <h4>Description</h4>
              <p>{recipeData.description}</p>
            </div>
            <div className="recipe__ingredients">
              <h4>Ingredients</h4>
              {/* {recipeData.ingredients.map((ingredient)=> (
                    <p>ingredient.ingredient_name</p>
                ))} */}
              <p>Chicken 1kg</p>
              <p>Olive oil 3/4 spoon</p>
              <p>Garlic powder 1/2 spoon</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
