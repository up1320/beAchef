import React,{useState,useEffect} from 'react'
import MasonaryLayout from '../MasonaryLayout/MasonaryLayout'
import { client } from '../../client'

import { feedQuery, searchQuery } from '../../utils/data'
import Spinner from '../Spinner/Spinner'

const Search = ({ searchTerm }) => {
  const [recipes, setRecipes] = useState(null)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      const query = searchQuery(searchTerm.toLowerCase())
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
  },[searchTerm])
  return (
    <div>
      {loading && <Spinner message="Searching for Recipes" />}
      {recipes?.length !== 0 && <MasonaryLayout recipes={recipes} />}
      {recipes?.length === 0 && searchTerm !== '' && !loading && (
        <div className='mt-10 text-center text-xl'>
          No Recipes Found
        </div>
      )}
    </div>
  )
}

export default Search