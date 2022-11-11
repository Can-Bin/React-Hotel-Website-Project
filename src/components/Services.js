import React from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"


const Services = () => {
  const services = [
      {
        icon: <FaCocktail/>,
        title: "Free Cocktails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, inventore repellat amet quis odit placeat."
      },
      {
        icon: <FaHiking/>,
        title: "Endless Hiking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, inventore repellat amet quis odit placeat."
      },
      {
        icon: <FaShuttleVan/>,
        title: "Free Shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, inventore repellat amet quis odit placeat."
      },
      {
        icon: <FaBeer/>,
        title: "Strongest Beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, inventore repellat amet quis odit placeat."
      }
    ]
  
  return (
    <div className='services'> 
        <Title title="Services"/>
        <div className="services-center">
          {services.map((item, index) => (
            <div className='services' key={index}>
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
        
    </div>
  )
}

export default Services