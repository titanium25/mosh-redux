import configureStore from "../store/configureStore";
import {loadBugs} from "../store/bugs";

const store = configureStore();

// API middleware
// UI Layer
store.dispatch(loadBugs());

// setTimeout(() => store.)

// Dispatch functions
// store.dispatch((dispatch, getState) => {
// Call an API
// When the promise is resolved => dispatch()
// dispatch({type: 'bugsReceived', bugs: [1,2,3]})
// If the promise is rejected => dispatch()
// });

// Toast API
// store.dispatch({
//     type: "error",
//     payload: {message: "An error occurred."}
// });