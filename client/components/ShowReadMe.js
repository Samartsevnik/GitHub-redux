import React from 'react'
import ReactMarkdown from 'react-markdown'
import PropagateLoader from 'react-spinners/PropagateLoader'
import { useSelector } from 'react-redux'
import Head from './head'

const RepoView = () => {
  const readme = useSelector((s) => s.githubRep.readmeFile)
  return (
    <div className="mt-10">
      <Head title="Readme" />
      <Head title="README" />
      <img
        className="mx-auto h-12 w-auto"
        src="https://image.flaticon.com/icons/svg/25/25231.svg"
        alt="Workflow"
      />

      {readme.length ? (
        <article className="markdown-body entry-content pt-4 my-5 mx-auto overflow-hidden w-full sm:w-2/3 px-8 border-4 ">
          <ReactMarkdown source={readme} />
        </article>
      ) : (
        <div className="flex justify-center items-center mt-10">
          <PropagateLoader color="teal" />
        </div>
      )}
    </div>
  )
}

RepoView.propTypes = {}

export default RepoView
