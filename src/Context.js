import { createContext, useEffect, useState } from "react";
import items from "./data"

export const RoomContext = createContext();

const RoomContextProvider = (props) => {
    const [state, setState] = useState({
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:"all", 
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breaksfast:false,
        pets:false
    })

    useEffect(() => {
        let rooms = formatData(items)
        let featuredRooms = rooms.filter(room => room.featured === true)
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))
        setState({
            rooms,
            featuredRooms,
            sortedRooms : rooms,
            loading: false,
            price:maxPrice,
            maxPrice,
            maxSize,
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

      const handleChange = (e) => {
        const target = e.target
        const value = e.type === "checkbox" ? target.checked : target.value
        const value = e.target.value
        
      }

      const filterRooms = () => {
        console.log("hello")
      }
    return(
        <div>
            <RoomContext.Provider value={{state, getRoom,handleChange }}>
                {props.children}
            </RoomContext.Provider>
        </div>
    )
};

export default RoomContextProvider;