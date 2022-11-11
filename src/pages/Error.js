import Banner from "../components/Banner"
import Hero from "../components/Hero"
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div>
        <Hero hero="error">
          <Banner title="404" subtitle="Page Not Found" >
            <Link className="btn-primary" to="/">
              Return Home
            </Link>
          </Banner>
        </Hero>
    </div>
  )
}

export default Error