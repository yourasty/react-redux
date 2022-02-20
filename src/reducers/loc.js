export default function loc(state = "/", action) {
    switch (action.type) {
      case "SET_LOC": {
        return action.payload;
      }
      default: {
        return state;
      }
    }
  }
  