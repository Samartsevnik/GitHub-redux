import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Head from './head'
import { history } from '../redux'
import { updateUsername } from '../redux/reducers/githubRep'

const Main = () => {
  const userName = useSelector((s) => s.githubRep.userName)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateUsername(''))
  }, [])
  return (
    <div className="flex h-screen mx-5">
      <Head title="Search" />
      <div className="m-auto">
        <img
          className="mx-auto h-12 w-auto"
          src="https://image.flaticon.com/icons/svg/25/25231.svg"
          alt="Workflow"
        />
        <div className="my-3 text-center leading-9 sm:text-2xl font-extrabold text-gray-900">
          GitHub repositories search
        </div>
        <input
          type="text"
          placeholder="Name"
          className="block w-full bg-gray-300 border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          value={userName}
          onChange={(e) => dispatch(updateUsername(e.target.value))}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              history.push(`/${userName}`)
            }
          }}
        />
        <button
          className="w-full bg-indigo-500 mt-2 hover:bg-indigo-700 text-sm text-white py-2 px-2 rounded"
          type="button"
          onClick={() => history.push(`/${userName}`)}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default React.memo(Main)
