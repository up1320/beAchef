import React from 'react'
import axios, { Axios } from 'axios'
import { useEffect,useState } from 'react'
import "./index.css"
import Recipe from './Recipe'
import { Link } from 'react-router-dom'

function FeelFood() {
  const [recipes,setRecipes] = useState([])
  const [apiRecipes,setApiRecipes] = useState([])
  const [mood,setMood] = useState("")
  const moodArray = ['happy','sad','depressed','anger','lonely','laziness']
  
  useEffect(async ()=>{
    try{
      
      const res = await axios.post(`/comfortFood?emotion=${mood}`)
      const x = Math.floor((Math.random() * recipes.length) + 1);
      const y = Math.floor((Math.random() * recipes.length) + 1);
      const z = Math.floor((Math.random() * recipes.length) + 1);
      const searchString = recipes[x]
      const searchString2 = recipes[y]
      const searchString3 = recipes[z]
      let recipe1 = axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=6848408c&app_key=1e14a48b2803f7b52a9008e25a86b0ec&ingr=5-8&excluded=DOUGH`)
      let recipe2 = axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchString2}&app_id=6848408c&app_key=1e14a48b2803f7b52a9008e25a86b0ec&ingr=5-8&excluded=DOUGH`)
      let recipe3 = axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchString3}&app_id=6848408c&app_key=1e14a48b2803f7b52a9008e25a86b0ec&ingr=5-8&excluded=DOUGH`)
      axios.all([recipe1,recipe2,recipe3]).then(
        axios.spread((...recipeData)=>{
          
          setApiRecipes(recipeData)
        })
    )
      setRecipes(res.data.result)
      
    }catch(err){
      console.log(err)
    }
  },[mood])
  useEffect(async ()=>{
    
    
  },[mood,recipes])

  
  return (
    <>
    
    <div className='custom-container'>
      <select 
       onChange={(e)=>setMood(e.target.value)}
      >
        {moodArray.length !== 0 && moodArray.map((mood)=>(<option>{mood}</option>))}
      </select>
      <div className='recipe-chooser'>
        <div className='recipe-inner-container'>
         {apiRecipes.length !== 0 && apiRecipes.map((recipe)=> <div className='recipe'> <Recipe name={recipe.data.hits[0].recipe.label} image={recipe.data.hits[0].recipe.image} url={recipe.data.hits[0].recipe.uri}/> </div>)} 
          
        </div>
        
      </div>
      <Link to={'/'}>
                <button className='feel-button mt-20' type='submit'>Exit to the app</button>
        </Link>
    </div>  
    </>
  )
}

export default FeelFood