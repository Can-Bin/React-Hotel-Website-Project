import React from 'react'
import { useContext } from 'react'
import {RoomContext} from "../Context"
import Title from "../components/Title"


const getUnique = (items) =>{
  return [...new Set(items.map(item => item.type))]
}


const RoomFilter = ({rooms}) => {  
  const {handleChange, state} = useContext(RoomContext)
  const {type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = state
  let types = getUnique(rooms)
  types = ["all",...types];
  types = types.map((item,index) => {
    return <option value={item} key={index}>{item}</option>
  })
  return (
    <div className='filter-container'>
      <Title title="search rooms"/>
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
            {types}
          </select>
        </div>
        {/* end select type */}
      </form>
    </div>
  )
}

export default RoomFilter