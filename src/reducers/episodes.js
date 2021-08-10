const initialState = {
  loaded: false,
  error: false,
  data: {}
}

export default function episodes(state = initialState, action){
  switch(action.type) {
    case 'FETCH_EPISODES_FULFILLED':{
      return {loaded: true, data: action.payload}
    }
    case 'FETCH_EPISODES_PENDING':{

      return {loaded: false}
    }
    case 'FETCH_EPISODES_REJECTED':{
      return {error: true}
    }
    default:{
      return state
    }
  }
}
