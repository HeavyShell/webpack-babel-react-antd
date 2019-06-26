import { Map, fromJS } from 'immutable'

const initState=Map({
  i18n:'zh_CN',
})

function listReducer(state = initState, action) {
  const {payload} = action;
  switch (action.type) {
    case 'APP_CHANGE_LANG':
      return state.setIn(['i18n'],payload.value)
    default:
      return state
  }
}

export default listReducer;