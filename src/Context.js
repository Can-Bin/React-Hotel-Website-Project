import { createContext, useEffect, useState } from "react";
import items from "./data"
import Client from "./Contentful"


export const RoomContext = createContext();

const RoomContextProvider = (props) => {
    const [state, setState] = useState({
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:"all ", 
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breaksfast:false,
        pets:false
    })

    const getData = async () => {
      try{
        let response = await Client.getEntries({
          content_type: 'example',
          order: 'sys.createdAt'
        })
        console.log(response.items)
        let rooms = formatData(response.items)
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
      }
      catch (err){
        console.log(err)
      }
    } 

    useEffect(() => {
     getData()
    }, [])

    

    const formatData = (items) => {
        let tempItems = items.map((item) => {
          let id = item.sys.id;
          let images = item.fields.images.map((image) => image.fields.file.url);
          let room = {...item.fields, images, id}
          // console.log(room);
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
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name 
        console.log(name, value);
        const filterRooms = () => {
          let {rooms, type, capacity,price, minSize, maxSize,breakfast,pets} = state
          // console.log(rooms);
          let tempRooms = [...rooms];
          //!transform value
          capacity = parseInt(capacity)                                                                                                                                                                                                       
          price = parseInt(price)                                                                                                                                                                                                       
          //! filter by room type
          if(type !== "all"){
             tempRooms = tempRooms.filter(room => room.type === value)
          }
          // //!filter by capacity
          // if(capacity !==1){
          //   tempRooms = tempRooms.filter(room => room.capacity >= capacity)
          // }

          //! filter by price
          tempRooms = tempRooms.filter(room => room.price <= price);
          //!filter by size
          tempRooms = tempRooms.filter(room => room.size >=minSize && room.size <= maxSize)
          //!filter by breakfast
          if(breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true)
          }
          //!filter by pets
          if(breakfast){
            tempRooms = tempRooms.filter(room => room.pets === true)
          }
          //!change state
          setState({
            sortedRooms: tempRooms
          })
          return tempRooms
          
          
        }
        return filterRooms()
    
        // setState(
        //   {
        //     [name]:value

        //   }
          
        // )   
           
      }
      
      
      // useEffect(() => {
      //   const filterRooms = () => {
      //     let {rooms, type, capacity,price, minSize, maxSize,breakfast,pets} = state
      //     console.log(rooms);
      //     let tempRooms = [...rooms];
      //     //! filter by room type
      //     capacity = parseInt(capacity)                                                                                                                                                                                                       
      //     if(type !== "all"){
      //        tempRooms = tempRooms.filter(room => room.type === type)
      //     }
      //     //!filter by capacity
      //     if(capacity !==1){
      //       tempRooms = tempRooms.filter(room => room.capacity >= capacity)
      //     }

      //     setState({
      //       sortedRooms: tempRooms
      //     })
      //   }
        
      //   // console.log(state);
           
      // }, [state])
      
      

     
    return(
        <div>
            <RoomContext.Provider value={{state, getRoom,handleChange}}>
                {props.children}
            </RoomContext.Provider>
        </div>
    )
};

export default RoomContextProvider; 