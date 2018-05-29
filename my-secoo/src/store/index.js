

import { creatstore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import reducer from './reducer'

const store = creatstore(reducer,applyMiddleware(thunk))

export default store