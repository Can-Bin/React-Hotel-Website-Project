import defaultBcg from "../images/room-1.jpeg"
import {useContext} from  "react"
import {RoomContext} from "../Context"
import { useParams, Link } from "react-router-dom"
import Banner from "../components/Banner"
import Hero from "../components/Hero"


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
          <Hero hero="roomsHero">
            <Banner title={`${room.name} room`}>
              <Link to="/rooms" className="btn-primary">
                Back to rooms
              </Link>
            </Banner>
          </Hero>
        )
      }
        
    </div>
  )
}


export default SingleRoom

