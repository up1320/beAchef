import React,{useState} from 'react'
import { Link } from "react-router-dom"
import "./Join.css"
function Join() {
    const [name, setName] = useState('')
    const [room,setRoom ] = useState('')
  return (
      <div className='joinOuterContainer'>
          <div className='joinInnerContainer'>
              <h1 className='heading'>Join</h1>
              <input placeholder='Name' className='joinInput' type='text' onChange={(e)=>{setName(e.target.value)} } />
              <input placeholder='Room' className='joinInput mt-20' type='text' onChange={(e)=>{setRoom(e.target.value)}} />
              <Link onClick={(e)=>(!name || !room)?e.preventDefault():null} to={`/foodConnect/chat?name=${name}&room=${room}`}>
                  <button className='button mt-20'>Join</button>
              </Link>
              <Link to={'/'}>
                <button className='button mt-20' type='submit'>Exit to the app</button>
              </Link>
          </div>
      </div>
  )
}

export default Join