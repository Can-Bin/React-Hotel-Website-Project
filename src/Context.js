import { createContext, useEffect, useState } from "react";
import items from "./data"

export const RoomContext = createContext();

const RoomContextProvider = (props) => {
    const [state, setState] = useState({
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading: true
    })

    useEffect(() => {
        let rooms = formatData(items)
        let featuredRooms = rooms.filter(room => room.featured === true)
        
        setState({
            rooms,
            featuredRooms,
            sortedRooms : rooms,
            loading: false
        })
    }, [])

    

    const formatData = (items) => {
        let tempItems = items.map((item) => {
          let id = item.sys.id;
          let images = item.fields.images.map((image) => image.fields.file.url);
          let room = {...item.fields, images, id}
          return room;
        });
        return tempItems
      }

      const getRoom = (slug) => {
        let tempRooms = [...state.rooms]
        const room = tempRooms.find(room => room.slug === slug)
        return room
      }
    return(
        <div>
            <RoomContext.Provider value={{state, getRoom }}>
                {props.children}
            </RoomContext.Provider>
        </div>
    )
};

export default RoomContextProvider;