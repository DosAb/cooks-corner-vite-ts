import React, { useState, useEffect } from "react";

import heart from "/icons/heart.svg"
import collection from "/icons/collection.svg"
import omletImg from "/imgs/omlet-img.jpg"

import "./recipeList.scss"

type CategoryProps = {
    title: string,
    author: string,
    likes: number,
    saves: number,
    img: string
}

export default function RecipeList ({title, author, likes, saves, img}: CategoryProps)
{
    return <>
        <div className="recipe">
            <div className="recipe__info">
                <h2>{title}</h2>
                <p>by {author}</p>
                <div className="recipe__save">
                    <img src={heart} alt="" />
                    <h4>{likes}</h4>
                    <img src={collection} alt="" />
                    <h4>{saves}</h4>
                </div>
            </div>
            <div className="recipe__overlay" />
            <img className="recipe__img" src={img} alt="img" />
        </div>
    </>
}