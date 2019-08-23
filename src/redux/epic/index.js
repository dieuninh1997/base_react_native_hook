import { combineEpics } from 'redux-observable'
import { getProduct } from './product'

const rootEpics = combineEpics(
  getProduct,
)

export default rootEpics
