import { Map, fromJS } from 'immutable'

const initState=Map({
  random:'',
  byId:Map()
})

function listReducer(state = initState, action) {
  switch (action.type) {
    case 'LIST_TODO':
      return state.setIn(['random'],action.random)
    case 'LIST_SET_DATA':
    
      const list=action.payload.list;
      list.map(item=>{
        
        state=state.setIn(['byId', item.id+''],fromJS(item))
      })
      
      return state
    default:
      return state
  }
}

export default listReducer;