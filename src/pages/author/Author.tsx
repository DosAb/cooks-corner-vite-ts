import RecipeList from "../../components/recipe/RecipeList.tsx"
import authorImg from "/imgs/authorImg.jpg"

import "./author.scss"

export default function Author()
{
    return <>
        <div className="author">
            <div className="author__info">
                <img src={authorImg} alt="" className="author__info-img" />
                <h3>Ainsley Harriott</h3>
                <div className="author__info-followers">
                    <div>
                        <h2>29</h2>
                        <p>recipe</p>
                    </div>
                    <div>
                        <h2>144</h2>
                        <p>followers</p>
                    </div>
                    <div>
                        <h2>118</h2>
                        <p>follow</p>
                    </div>
                </div>
                <p className="author__info-description">Ainsley Denzil Dubriel Harriott MBE is an English chef and television presenter. He is known for his BBC cookinп</p>
                <button>Follow</button>
            </div>
            <RecipeList />
        </div>
    </>
}