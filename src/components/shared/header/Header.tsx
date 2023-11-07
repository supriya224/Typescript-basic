import { Link } from "react-router-dom"


const Header = () => {
  return (

    <nav className="bg-indigo-500 shadow-lg shadow-indigo-700 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://www.linkedin.com/company/analystt-ai/about/" className="flex items-center">
          <img src="https://cdn.razorpay.com/logos/LaPHQWJ6J4uFTV_large.png" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Analystt.ai</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lgmd:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link to='/home' className="hover:text-white shadow-lg shadow-black w-20 h-32 p-4" aria-current="page" >
                Home
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header