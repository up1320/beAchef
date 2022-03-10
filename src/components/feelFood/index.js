import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'


function FeelFood() {
  const [recipes,setRecipes] = useState([])
  useEffect(async ()=>{
    try{
      let recipe_param 
      const res = await axios({
        method:'post',
        headers:{
          "accepts":"application/json"
      },
      params:{
        'emotion':'happy'
      },
      url:'/comfortFood'
      })
      recipe_param = res.data.result[0]
      console.log(recipe_param)
    }catch(err){
      console.log(err)
    }
  },[])
  return (
    <>
    {/* {(recipes !== {} || recipes !== []) && console.log(recipes)}
    
    <div>{(recipes !== {} || recipes !== []) && recipes.result.map((recipe)=>{
      return <h1>{recipe}</h1>
    })}</div> */}
    </>
  )
}

export default FeelFood