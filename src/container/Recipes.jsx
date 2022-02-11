import React,{useState} from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'
import Feed from '../components/Feed/Feed'
import Search from "../components/Search/Search"
import RecipeDetail from "../components/RecipeDetail/RecipeDetail"
import CreateRecipe from "../components/CreateRecipe/CreateRecipe"
const Recipes = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('');  
  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user && user} />
      </div>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route path="/recipe-detail/:recipeId" element={<RecipeDetail user={user && user} />} />
          <Route path="/create-recipe" element={<CreateRecipe user={user && user} />} />
          <Route path="/search" element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        </Routes>
      </div>
    </div>
  );
};


export default Recipes