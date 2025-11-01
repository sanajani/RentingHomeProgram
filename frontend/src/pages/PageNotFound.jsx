import { Link } from "react-router-dom"
const PageNotFound = () => {
  return (
    <div className="bg-red-50 min-h-screen flex justify-center items-center">
      <div className="w-4/5 mx-auto flex flex-col items-center gap-10">
        <h1 className="text-center text-2xl font-bold">OOPS.. Something went wrong || the page dose not exist</h1>
        <Link className="font-bold underline text-xl" to='/'>Go to Home Page</Link>
      </div>
    </div>
  )
}

export default PageNotFound