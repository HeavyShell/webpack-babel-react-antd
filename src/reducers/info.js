
import { Map } from 'immutable'

const initState=Map({
  random:''
})

function infoReducer(state = initState, action) {
  switch (action.type) {
    case 'INFO_TODO':
      return state.setIn(['random'],action.random)
    default:
      return state
  }
}

export default infoReducer;