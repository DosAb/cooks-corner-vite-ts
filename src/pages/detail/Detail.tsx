import detailBackground from "/imgs/detailBackground.jpg"
import clock from "/icons/clock.svg"

import "./detail.scss"

export default function Detail()
{
    return <>
        <div className="detail">
            <div className="detail__backround">
                <img src={detailBackground} alt="" />
            </div>
            <div className="recipe">
                <h3 className="recipe__name">Ainsley’s Jerk Chicken</h3>
                <h5 className="recipe__author">by Ainsley Harriott</h5>
                <div className="recipe__time">
                    <img src={clock} alt="clock" />
                    <h4>20-30 min</h4>
                </div>
                <div className="recipe__dificulty">Easy</div>
                <div className="recipe__description">
                    <h4>Description</h4>
                    <p>You pick up your palette knife and then work that into. Give your meat a good old rub. That’s it, nice and hot, hot and spicy meat. He-he boy...You pick up your palette knife and then work that into. Give your meat a good old rub. That’s it, nice and hot, hot and spicy meat. He-he boy...You pick up your palette knife and then work that into. Give your meat a good old rub. That’s it, nice and hot, hot and spicy meat. He-he boy...</p>
                </div>
                <div className="recipe__ingredients">
                    <h4>Ingredients</h4>
                    <p>Chicken 1kg</p>
                    <p>Olive oil 3/4 spoon</p>
                    <p>Garlic powder 1/2 spoon</p>
                </div>
            </div>
        </div>
    </>
}