import React from 'react'
import { useContext } from 'react'
import {RoomContext} from "../Context"
import Title from "../components/Title"


const getUnique = (items) =>{
  return [...new Set(items.map(item => item.type))]
}


const RoomFilter = ({rooms}) => {  
  const {state, handleChange} = useContext(RoomContext)
  const {type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = state
  // let types = getUnique(rooms)
  // types = ["all",...types];
  // types = types?.map((item,index) => {
  //   return <option value={item} key={index}>{item}</option>
  // })

  // let people = getUnique(rooms);
  // people = people.map((item,index) => {
  //   return
  //   <option key={index} value={item}>{item}</option>
  // })
  return (
    <div className='filter-container'>
      <Title title="search rooms"/>
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
            <option value="all">All</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="family">Family</option>
            <option value="presidential">Presidential</option>
          </select> 
        </div>
        {/* end select type */}
        {/* guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests </label>
          <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="10">10</option>
          </select> 
        </div>
        {/* end select type */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">
            room price {price}
          </label>
          <input type="range" name='price' min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange}  className="form-control" />
        </div>
        {/* end room price  */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input type="number" name='minSize' id='size' value={minSize} onChange={handleChange} className="size-input" />
            <input type="number" name='maxSize' id='size' value={maxSize} onChange={handleChange} className="size-input" />
          </div>
        </div>
        {/* end of size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name='breakfast' id="breakfast" checked onChange={handleChange} />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name='pets' id="pets"  onChange={handleChange} />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </div>
  )
}

export default RoomFilter