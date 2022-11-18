import Room  from "./Room"
import React from 'react'

const RoomList = ({rooms}) => {

 
  if(rooms.length === 0){ 
  return (
    <div className='empty-search'>
      <h3>unfortunately no rooms matched your search parameters</h3>
    </div>
    )
  } 
    return(
      <div className="roomsList">
        <div className="roomslist-center">
          {
            rooms.map((item) => {
              return (
                <Room key={item.id} room={item}/>
              )
            })
          }
        </div>
      </div>
    )
  
  

//     return(
//       rooms.length === 0 ?  
//       (
//         <div className='empty-search'>
//           <h3>unfortunately no rooms matched your search parameters</h3>
//         </div>
//       ) : (
//         <div className="roomsList">
//           <div className="roomslist-center">
//             {
//               rooms.map((item) => {
//                 return (
//                   <Room key={item.id} room={item}/> 
//                 )
//               })
//             }
//           </div>
//         </div>
//       )
//     )
      
}

export default RoomList