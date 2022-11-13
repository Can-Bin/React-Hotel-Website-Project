import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import RoomContainer from "../components/RoomContainer"


const Rooms = () => {
    return (
        <div>
            <Hero hero="roomsHero">
                <Banner  title="Our Rooms">
                    <Link className="btn-primary" to="/">
                        Return Home
                    </Link>
                </Banner>
            </Hero>
            <RoomContainer/>
        </div>
    )
}

export default Rooms