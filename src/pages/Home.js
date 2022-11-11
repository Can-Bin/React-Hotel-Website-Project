import { Link } from "react-router-dom"
import Banner from "../components/Banner"
import FeaturedRooms from "../components/FeaturedRooms"
import Hero from "../components/Hero"
import Services from "../components/Services"

const Home = () => {
    return (
        <div>
            <Hero hero="defaultHero">
                <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms Starting at $399">
                    <Link to="/rooms" className="btn-primary">
                       See Our Rooms
                    </Link>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRooms />
            
        </div>
    )
}

export default Home