import React from 'react'
import { useContext } from 'react'
import {RoomContext} from "../Context"
import Title from "../components/Title"

const RoomFilter = ({rooms}) => {  
  const {handleChange, state} = useContext(RoomContext)
  const {type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = state

  return (
    <div className='filter-container'>
      <Title title="search rooms"/>
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
            <option value="all">all</option>
            <option value="single">single</option>
            <option value="double">double</option>
            <option value="family">family</option>
            <option value="presidential">presidential</option>
          </select>
        </div>
        {/* end select type */}
      </form>
    </div>
  )
}

export default RoomFilter