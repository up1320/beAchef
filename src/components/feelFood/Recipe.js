import React from "react"
import "./Recipe.css"
const Recipe  = ({name,image,url}) =>{
    return (
        <>
            <div className="recipe-container">
                <div className="recipe-img">
                    <img src={image} />
                </div>
                <div className="recipe-name">
                    <h1>{name}</h1>
                </div>
                <div className="recipe-buttons">
                    <a className="recipe-button" href={url}>Get Recipe</a>
                </div>
            </div>
        </>
    )
}

export default Recipe