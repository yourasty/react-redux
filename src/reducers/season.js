export default function season(state = 1, action){
  switch(action.type) {
    case 'UPDATE_SEASON':{
      return action.payload
    }
    default:{
      return state
    }
  }
}
