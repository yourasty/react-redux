export default function episode(state = 0, action) {
  switch (action.type) {
    case "UPDATE_EPISODE": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
