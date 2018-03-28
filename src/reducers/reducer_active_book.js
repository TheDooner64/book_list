// Every reducer is called any time an action (any action!) is dispatched
// Reducer functions always take two arguments, the current state and the action
// The state argument is not the application state, but only the state this reducer is responsible for
// Redux will throw some "actions" through the reducers when it's "booting up"
// Set the initial state to null by default, since undefined would through an error
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    // Always return a fresh object (i.e. never manipulate state directly)
    return action.payload;
  }

  // If the action doesn't matter to this reducer, we simply return the current state
  return state;
}
