import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>Welcome home</h1>
    <Link to="/tickets">tickets</Link>
    <Link to="/" exact >home</Link>
    </>
  )
}

export default Home