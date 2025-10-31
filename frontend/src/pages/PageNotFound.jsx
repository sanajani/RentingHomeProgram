import { Link } from "react-router-dom"
const PageNotFound = () => {
  return (
    <div>
        <h1>Page Not found</h1>
        <Link to='/'>Go to Home page</Link>
    </div>
  )
}

export default PageNotFound