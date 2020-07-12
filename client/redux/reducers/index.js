import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import githubRep from "./githubRep";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    githubRep
  })

export default createRootReducer
