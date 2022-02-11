import React from 'react'
import Masonry from "react-masonry-css"
import Recipe from '../Recipe/Recipe'

const breakpointObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500:1,
}

const MasonaryLayout = ({recipes}) => {
  return (
      <Masonry className='flex animate-slide-fwd' breakpointCols={breakpointObj}>
          {recipes?.map((recipe)=><Recipe key={recipe._id} recipe={recipe} className="w-max"/>)} 
    </Masonry>
  )
}

export default MasonaryLayout