import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, useParams } from 'react-router-dom'
import Head from './head'
import RepositoriesList from './RepositoriesList'
import RepoView from './ShowReadMe'
import Header from './headers'
import { updateReadme, updateRepositories, updateUser } from '../redux/reducers/githubRep'

const Home = () => {
  const { userName, repName } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateRepositories(userName))
  }, [dispatch, userName])
  useEffect(() => {
    if (repName) dispatch(updateReadme(userName, repName))
  }, [dispatch, repName, userName])
  useEffect(() => {
    dispatch(updateUser(userName))
  }, [dispatch, userName])
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <Route exact path="/:userName" component={() => <RepositoriesList />} />
      <Route exact path="/:userName/:repName" component={() => <RepoView />} />
    </div>
  )
}

Home.propTypes = {}

export default Home
