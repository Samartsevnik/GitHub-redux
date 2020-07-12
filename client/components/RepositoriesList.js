import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PulseLoader from 'react-spinners/PulseLoader'
import { useSelector } from 'react-redux'
import Head from './head'

const RepositoriesList = () => {
  const { userName } = useParams()
  const repositoriesList = useSelector((s) => s.githubRep.list)
  const [search, setSearch] = useState('')
  const handelChange = (e) => {
    setSearch(e.target.value)
  }
  const filterList = repositoriesList.filter((el) => el.name.includes(search))
  return (
    <div className="container m-auto  mt-10 sm:px-10">
      <Head title="Repositories" />
      <div className=" w-2/3 md:w-1/2 mx-auto mb-10 border-b border-b-2 border-black pb-1">
        <input
          value={search}
          onChange={handelChange}
          type="text"
          placeholder="Search..."
          className="appearance-none bg-transparent  opacity-50 text-gray-700 bg-grey-50 w-full text-black sm:px-5"
        />
      </div>
      <div className="flex py-3 mx-2 sm:mx-0 border-b-2 border-solid border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
        <div className="w-2/6 pl-5">REPOSITORY</div>
        <div className="w-2/6 md:w-1/6 text-center sm:text-left ">DEPLOYMENT</div>
        <div className="w-2/6 adaptive">LAST COMMIT</div>
        <div className="w-2/6 md:w-1/6 text-center md:text-left ">README</div>
      </div>
      {filterList.map((el) => (
        <div
          key={el.id}
          className="flex border-b-2 border-solid py-2 border-gray-200 text-xs md:text-base mx-2 sm:mx-0"
        >
          <div className="w-2/6 pl-5">
            <a
              href={`https://github.com/${userName}/${el.name}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-800"
            >
              {el.name}
            </a>
          </div>
          <div className="w-2/6 md:w-1/6 pl-0 sm:pl-5 text-center sm:text-left ">
            <a
              className={`${
                el.homepage
                  ? 'text-green-600  bg-green-100 hover:bg-green-200'
                  : 'bg-red-100 text-red-500 '
              } inline-flex px-2 font-mono leading-5 font-semibold rounded-full`}
              href={el.homepage ? el.homepage : undefined}
              target="_blank"
              rel="noreferrer"
            >
              GO
            </a>
          </div>
          <div className="w-2/6 adaptive">{new Date(el.updated_at).toLocaleString()}</div>
          <div className="w-2/6 md:w-1/6 text-center md:text-left">
            <Link to={`/${userName}/${el.name}`} className="hover:text-gray-800">
              View
            </Link>
          </div>
        </div>
      ))}
      {!repositoriesList.length && (
        <div className="flex justify-center items-center mt-40">
          <PulseLoader color="teal" />
        </div>
      )}
    </div>
  )
}

export default React.memo(RepositoriesList)
