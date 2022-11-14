import React, { useContext } from 'react'
import RoomFilter from "./RoomFilter"
import RoomList from "./RoomList"
import Loading from "./Loading"
import { RoomContext } from '../Context'

const RoomContainer = () => {
  const {state} = useContext(RoomContext);
  // console.log(state)
  const {loading, sortedRooms, rooms} = state

  // if(loading){
  //   return(
  //     <Loading/>
  //   )
  // }
  return (
    <div>
      <RoomFilter rooms={rooms}/>
      <RoomList rooms={sortedRooms}/>
    </div>
  )
}

export default RoomContainer