const initialState = {
  loaded: false,
  error: false,
  data: {}
}


export default function show(state = initialState, action){
  switch(action.type) {
    case 'FETCH_SHOW_FULFILLED':{
      return {loaded: true, data: action.payload}
    }
    case 'FETCH_SHOW_PENDING':{

      return {loaded: false}
    }
    case 'FETCH_SHOW_REJECTED':{
      return {error: true}
    }
    default:{
      return state
    }
  }
}
