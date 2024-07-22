import heart from "/icons/heart.svg"
import collection from "/icons/collection.svg"
import omletImg from "/imgs/omlet-img.jpg"

import "./recipeList.scss"

export default function RecipeList()
{
    return <>
        <div className="recipes">
            <div className="recipe">
                <div className="recipe__info">
                    <h2>Egg Omlet</h2>
                    <p>by Ainsley Harriott</p>
                    <div className="recipe__save">
                        <img src={heart} alt="" />
                        <h4>118</h4>
                        <img src={collection} alt="" />
                        <h4>118</h4>
                    </div>
                </div>
                <div className="recipe__overlay" />
                <img className="recipe__img" src={omletImg} alt="img" />
            </div>
        </div>
    </>
}