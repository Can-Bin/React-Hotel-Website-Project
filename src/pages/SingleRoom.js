import defaultBcg from "../images/room-1.jpeg"
import {useContext} from  "react"
import {RoomContext} from "../Context"
import { useParams, Link } from "react-router-dom"
import Banner from "../components/Banner"
import Hero from "../components/Hero"
import StyledHero from "../components/StyledHero"


const SingleRoom = () => {
  const {getRoom} = useContext(RoomContext)
  const {slug} = useParams()
  const room = getRoom(slug)
  console.log(room);
  return (
    <div>
      {

        !room ? (
          <div className="error">
            <h3>No such room could be found...</h3>
            <Link to="/rooms">
              Back to the rooms
            </Link>
          </div>
        ) : (
          <div>
            <StyledHero img={room.images[0] || defaultBcg} >
              <Banner title={`${room.name} room`}>
                <Link to="/rooms" className="btn-primary">
                  Back to rooms
                </Link>
              </Banner>
            </StyledHero>
            <section className="single-room">
              <div className="single-room-images">
                {room.images.slice(1,4).map((item,index) =>{
                  return(
                    <img src={item} alt={room.name} key={index} />
                  )
                })}
              </div>
              <div className="single-room-info">
                <div className="desc">
                  <h3>details</h3>
                  <p>{room.description}</p>
                </div>
                <div className="info">
                  <h3>info</h3>
                  <h6>price: ${room.price}</h6>
                  <h6>size: ${room.size} SQFT</h6>
                  <h6>max capacity: {
                    room.capacity > 1 ? `${room.capacity} people`: `${room.capacity} person`
                    }
                  </h6>
                  <h6>{room.pets? "pets allowed" : "no pets allowed"}</h6>
                  <h6>{room.breakfast && "free breakfast included"}</h6>
                </div>
              </div>
            </section>
            <section className="room-extras">
              <h6>extras</h6>
              <ul className="extras">
                {room.extras.map((item,index) => {
                  return(
                    <li key={index}>{item}</li>
                  )
                })}
              </ul>
            </section>
          </div>
        )
      }
    </div>
  )
}


export default SingleRoom

