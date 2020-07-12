import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const { userName, repName } = useParams()
  const user = useSelector((s) => s.githubRep.userInfo)
  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-600 px-6 py-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <div className="mr-10">
          <a href={`https://github.com/${userName}`}>
            <img className="w-16 h-16 rounded" src={`${user.avatar_url}`} alt="avatar" />
          </a>
        </div>
        <div className="uppercase tracking-wider font-extrabold">{userName}</div>
      </div>
      <div className="flex justify-end font-serif text-lg font-medium ">
        {userName && (
          <Link className={`text-white ${repName ? 'hidden' : 'inline'} sm:inline hover:text-gray-400`} to="/">
            Main
          </Link>
        )}
        {repName && (
          <Link className="text-white hover:text-gray-400 ml-10" to={`/${userName}`}>
            Repositories
          </Link>
        )}
      </div>
    </nav>
  )
}

export default React.memo(Header)
