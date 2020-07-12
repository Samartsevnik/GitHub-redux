import axios from 'axios'

const SET_REPOSITORIES = 'SET_REPOSITORIES'
const SET_README = 'SET_README'
const SET_USER = 'SET_USER'
const SET_USERNAME = 'SET_USERNAME'
const initialState = {
  userName: '',
  list: [],
  readmeFile: '',
  userInfo: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        userName: action.name
      }
    case SET_REPOSITORIES:
      return {
        ...state,
        list: action.repo
      }
    case SET_README:
      return {
        ...state,
        readmeFile: action.readme
      }
    case SET_USER:
      return {
        ...state,
        userInfo: action.userInfo
      }
    default:
      return state
  }
}

export function updateUsername(name) {
  return { type: 'SET_USERNAME', name }
}
export function updateRepositories(username) {
  return (dispatch) => {
    axios(`https://api.github.com/users/${username}/repos`).then(({ data }) => {
      dispatch({ type: SET_REPOSITORIES, repo: data })
    })
  }
}

export function updateReadme(userName, repositoryName) {
  const headers = { Accept: 'application/vnd.github.VERSION.raw' }
  return (dispatch) => {
    axios(`https://api.github.com/repos/${userName}/${repositoryName}/readme`, { headers }).then(
      ({ data }) => {
        dispatch({ type: SET_README, readme: data })
      }
    )
  }
}
export function updateUser(username) {
  return (dispatch) => {
    axios.get(`https://api.github.com/users/${username}`).then(({ data }) => {
      dispatch({ type: SET_USER, userInfo: data })
    })
  }
}