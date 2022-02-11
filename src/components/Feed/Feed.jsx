import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { client } from '../../client'
import MasonaryLayout from '../MasonaryLayout/MasonaryLayout'
import { feedQuery, searchQuery } from '../../utils/data'
import Spinner from '../Spinner/Spinner'
const Feed = () => {
  console.log(feedQuery)
  const [loading, setLoading] = useState(false)
  const [recipes,setRecipes] = useState(null)
  const { categoryId } = useParams()
  
  useEffect(() => {
    setLoading(true)
    if (categoryId) {
      const query = searchQuery(categoryId)
      client.fetch(query)
        .then((data) => {
          setRecipes(data)
          setLoading(false)
      })
    } else {
      client.fetch(feedQuery)
        .then((data) => {
          setRecipes(data)
          setLoading(false)
      })
    }
  },[categoryId])
  if (loading) {
    return <Spinner message='Getting new Dishes from kitchen' />
  }
  if (!recipes ?. length) {
    return <h2>No Recipes Available</h2>
  }
  return (
    <div>
      {recipes && <MasonaryLayout recipes={recipes} />}
    </div>
  )
}

export default Feed