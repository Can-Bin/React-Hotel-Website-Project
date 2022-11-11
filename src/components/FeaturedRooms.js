import React, { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from "../components/Title"
import Loading from "./Loading"
import Room from './Room'

const FeaturedRooms = () => {
    const {state} = useContext(RoomContext)
    const {loading, featuredRooms} = state
    // console.log(featuredRooms)
    const rooms = featuredRooms.map(room => {
      return (
        <Room key={room.id} room={room}/>
      )
    })

  return (
    <div className='featured-rooms'>
      <Title title="Featured Rooms"/>
      <div className="featured-rooms-center">
      {loading ? <Loading/> : rooms}
      </div>   
           
    </div>
  )
}

export default FeaturedRooms