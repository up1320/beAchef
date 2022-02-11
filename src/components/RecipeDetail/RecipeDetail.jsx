import React,{useState,useEffect} from 'react'
import { MdDownloadForOffline } from 'react-icons/md'
import { Link, useParams } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { client,urlFor } from '../../client'
import MasonaryLayout from '../MasonaryLayout/MasonaryLayout'
import {recipeDetailMoreRecipeQuery,recipeDetailQuery} from "../../utils/data"
import Spinner from '../Spinner/Spinner'

const RecipeDetail = ({ user }) => {
  const [recipes, setRecipes] = useState(null)
  const [recipeDetail, setRecipeDetails] = useState(null)
  const [comment, setComment] = useState('')
  const [addingComment, setAddingComment] = useState(false)
  const { recipeId } = useParams()
  
 
 
  const fetchRecipeDetails = () => {
    let query = recipeDetailQuery(recipeId)

    if (query) {
      client.fetch(query)
        .then((data) => {
          setRecipeDetails(data[0])
          if (data[0]) {
            query = recipeDetailMoreRecipeQuery(data[0])

            client.fetch(query)
            .then((res)=>setRecipes(res))
          }
       })
    }
  }


  useEffect(() => {
    fetchRecipeDetails()
  }, [recipeId])
  
   const addComment = () => {
    if (comment) {
      setAddingComment(true)

      client
        .patch(recipeId)
        .setIfMissing({ comments: [] })
        .insert('after', 'comments[-1]', [{
          comment,
          _key: uuidv4(),
          postedBy: {
            _type: 'postedBy',
            _ref:user._id
          }
        }])
        .commit()
        .then(() => {
          fetchRecipeDetails()
          setComment('')
          setAddingComment(false)
        })
    }
  }

  if (!recipeDetail) {
    return <Spinner message="Preparing Recipe" />
  }
  return (
    <>
    <div className='flex xl-flex-row flex-col m-auto bg-white' style={{maxWidth:'1500px',borderRadius:'32px'}}>
      <div className='flex justify-center items-center md:items-start flex-initial'>
        <img
          src={recipeDetail?.image && urlFor(recipeDetail.image).url()}
          className="rounded-t-3xl rounded-b-lg"
          alt="user-recipe"
        />
      </div>
      <div
        className='w-full p-5 flex-1 xl:min-w-620'
      >
        <div
         className='flex items-center justify-between'
        >
          <div
           className='flex gap-2 items-center'
          >
             <a
                                  href={`${recipeDetail.image?.asset?.url}?dl=`}
                                  download
                                  onClick={(e) => e.stopPropagation()}
                                  className="bg-white w-9 h-9 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none"
                              >
                                  <MdDownloadForOffline />
                            </a>
          </div>
          <a
            href={recipeDetail.destination}
            target='_blank'
          
          >{recipeDetail.destination}
          </a>
        </div>
        <div>
        <h1 className='text-4xl font-bold break-words mt-3'>{recipeDetail.title}</h1>
        <p className='mt-3'>{recipeDetail.about} </p>
        </div>
         <Link to={`/user-profile/${recipeDetail.postedBy?._id}`}
          className='flex gap-2 mt-5 items-center bg-white rounded-lg'
          >
              <img
                  className='w-8 h-8 rounded-full object-cover'
                  src={recipeDetail.postedBy?.image}
                  alt="user-profile"
              />
              <p className='font-semibold capitalize'>{recipeDetail.postedBy?.userName}</p>
        </Link>
        <h2 className='mt-5 text-2xl'>Comments</h2>
        <div className='max-h-370 overflow-y-auto'>
          {recipeDetail?.comments?.map((comment) => (
            
              
              <div className='flex gap-2 mt-5 items-center bg-white rounded-lg' key={comment.comment}>
                <img
                  src={comment.postedBy?.image}
                  alt="user-profile"
                  className='w-10 h-10 rounded-full cursor-pointer'
                />
                <div className='flex flex-col'>
                  <p className='font-bold'>{comment.postedBy?.userName}</p>
                  <p>{comment.comment}</p>
                </div>
              </div>
              
            ))}
          </div>
        <div className='flex flex-wrap mt-6 gap-3'>
           <Link to={`/user-profile/${recipeDetail?.postedBy._id}`}
            className="flex gap-2 mt-5 items-center bg-white rounded-lg "
          >
              <img
                  className='w-10 h-10 rounded-full cursor-pointer'
                  src={recipeDetail.postedBy?.image}
                  alt="user-profile"
              />
              
          </Link>
          <input
            className='flex-1 border-gray-100 outline-none border-2 p-2 rounded-2xl focus:border-gray-300'
            type='text'
            placeholder="Add a Comment"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value)
            }}
          />
          <button
            type='button'
            className='bg-red-500 tex-white rounded-full px-6 py-2 font-semibold text-base outline-none'
            onClick={addComment}
          >
            {addingComment ? 'Posting the Comment...':'Post'}
          </button>
        </div>
      </div>
      
      </div>
      {console.log(recipes)}
      {recipes?.length >0 ? (
        <>
          <h2 className='text-center font-bold text-2xl mt-8 mb-4'>
            More Like This
          </h2>
          <MasonaryLayout recipes={recipes}/>
        </>
      ) : (
          <Spinner message='Loading More Pins' />
    )}
    </>
    
  )
}

export default RecipeDetail