import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import "./index.css"

const emotionOptions = [
  {
    key: 'stress',
    text: 'stress',
    value: 'stress',
  },
  {
    key: 'boredom',
    text: 'boredom',
    value: 'boredom',
  },
  {
    key: 'satisfaction',
    text: 'satisfaction',
    value: 'satisfaction',
  },
  {
    key: 'happy',
    text: 'happy',
    value: 'happy',
  },
  {
    key: 'sad',
    text: 'sad',
    value: 'sad',
  }
]

const Chef = () => (
    <div className='chef-bg'>
        <div className='chef-dropdown'>
            <h1>What are you in mood for today??</h1>
            <Dropdown
                placeholder='What are you in mood today??'
                fluid
                selection
                options={emotionOptions}
            />
        </div>
          
    </div>

)

export default Chef